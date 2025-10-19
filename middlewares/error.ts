// middlewares/error.ts

export async function errorHandler(
  req: Request,
  next: () => Promise<Response>,
): Promise<Response> {
  try {
    // Diğer middleware’leri ve route'u çalıştır
    return await next();
  } catch (err) {
    console.error("❌ Error caught:", err);

    const message =
      err instanceof Error ? err.message : "Unknown server error";

    return new Response(
      JSON.stringify({ error: message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
