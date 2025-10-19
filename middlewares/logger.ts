export async function logger(req: Request, next: () => Promise<Response>) {
  const start = performance.now();
  const res = await next();
  const ms = (performance.now() - start).toFixed(2);
  console.log(`[${req.method}] ${req.url} → ${res.status} (${ms}ms)`);
  return res;
}
