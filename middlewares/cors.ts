// middlewares/cors.ts

export async function cors(req: Request, next: () => Promise<Response>) {
  // Eğer tarayıcı "preflight" (OPTIONS) isteği atarsa, sadece header dönelim
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  // Diğer istekler normal çalışsın ama header eklensin
  const res = await next();
  const headers = new Headers(res.headers);

  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  return new Response(res.body, { ...res, headers });
}
