function Careers() {
  const [sent, setSent] = useState(false);
  const [mailtoFallback, setMailtoFallback] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    const body = [
      `Nome completo: ${payload["nome"] ?? ""}`,
      `E-mail: ${payload["email"] ?? ""}`,
      `Telefone: ${payload["telefone"] ?? ""}`,
      `Área / Cargo de interesse: ${payload["cargo"] ?? ""}`,
      "",
      `Experiência profissional: ${payload["experiencia"] ?? ""}`,
      "",
      `Mensagem: ${payload["mensagem"] ?? ""}`,
    ].join("\n");

    window.location.href = `mailto:curriculo@stbaero.com.br?subject=${encodeURIComponent(
      `[NOVA CANDIDATURA] ${payload["cargo"] ?? ""} - ${payload["nome"] ?? ""}`,
    )}&body=${encodeURIComponent(body)}`;

    form.reset();
    setMailtoFallback(true);
    setSent(false);
  };

  const input =
    "w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 transition-colors";
