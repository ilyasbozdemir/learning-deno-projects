export const handler = () => {
  const denoVersion = Deno.version.deno;
  const hostname = Deno.env.get("COMPUTERNAME") || "unknown";

  return new Response(
    JSON.stringify({ denoVersion, hostname }),
    { headers: { "Content-Type": "application/json" } }
  );
};
