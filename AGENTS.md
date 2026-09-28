# Project architecture

- Keep the application as a client-rendered TanStack Router SPA mounted once in `#root`; do not add an SSR document shell because it duplicates the HTML tree and breaks interactions.