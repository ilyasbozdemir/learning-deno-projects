// functions/hello.ts
export const handler = (req: Request): Response => {
  const url = new URL(req.url);
  const name = url.searchParams.get("name") ?? "Guest";
  return new Response(JSON.stringify({ message: `Hello, ${name}!` }), {
    headers: { "Content-Type": "application/json" },
  });
};
