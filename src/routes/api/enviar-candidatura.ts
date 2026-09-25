import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const candidaturaSchema = z.object({
  nome: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(160),
  telefone: z.string().trim().max(30).optional().catch(""),
  cargo: z.string().trim().min(1).max(120),
  experiencia: z.string().trim().max(1000).optional().catch(""),
  mensagem: z.string().trim().max(1000).optional().catch(""),
});

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const textField = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export const Route = createFileRoute("/api/enviar-candidatura")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (request.method !== "POST") {
          return Response.json({ error: "Método não permitido" }, { status: 405 });
        }

        try {
          const payload = await request.json();
          const nome = textField(payload?.nome, 120);
          const email = textField(payload?.email, 160);
          const telefone = textField(payload?.telefone, 30);
          const cargo = textField(payload?.cargo, 120);
          const experiencia = textField(payload?.experiencia, 1000);
          const mensagem = textField(payload?.mensagem, 1000);

          if (!nome || !cargo || !isValidEmail(email)) {
            return Response.json({ error: "Dados inválidos" }, { status: 400 });
          }

          const apiKey = process.env.RESEND_API_KEY;
          if (!apiKey) {
            // Sem chave configurada: o cliente faz fallback para o e-mail.
            return Response.json(
              { error: "Serviço de e-mail não configurado" },
              { status: 503 },
            );
          }

          const { Resend } = await import("resend");
          const resend = new Resend(apiKey);

          const from = process.env.RESEND_EMAIL_DOMAIN
            ? `STB Aero <curriculo@${process.env.RESEND_EMAIL_DOMAIN}>`
            : "STB Aero <curriculo@stbaero.com.br>";

          const { error } = await resend.emails.send(
            {
              from,
              to: ["curriculo@stbaero.com.br"],
              replyTo: email,
              subject: `[NOVA CANDIDATURA] ${cargo} - ${nome}`,
              text: [
                "Nova candidatura recebida pelo site da STB Aero",
                "",
                `Nome completo: ${nome}`,
                "",
                `E-mail: ${email}`,
                "",
                `Telefone: ${telefone || "Não informado"}`,
                "",
                `Área / Cargo de interesse: ${cargo}`,
                "",
                `Experiência profissional: ${experiencia || "Não informado"}`,
                "",
                `Mensagem: ${mensagem || "Não informado"}`,
              ].join("\n"),
            },
            { idempotencyKey: `candidatura/${crypto.randomUUID()}` },
          );

          if (error) {
            console.error("Falha ao enviar candidatura:", error.message);
            return Response.json({ error: "Falha no envio" }, { status: 502 });
          }

          return Response.json({ success: true });
        } catch {
          return Response.json({ error: "Requisição inválida" }, { status: 400 });
        }
      },
    },
  },
});

export type CandidaturaInput = z.infer<typeof candidaturaSchema>;
