// functions/time.ts
export const handler = (req: Request) => {
  const url = new URL(req.url);
  const a = Number(url.searchParams.get("a"));
  const b = Number(url.searchParams.get("b"));

  if (isNaN(a) || isNaN(b)) {
    return new Response(
      JSON.stringify({
        error: "Lütfen geçerli sayılar girin, örnek: /api/math?a=5&b=3",
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const result = a + b;
  return new Response(JSON.stringify({ result }), {
    headers: { "Content-Type": "application/json" },
  });
};
