import { logger } from "./middlewares/logger.ts";

const FUNCTIONS_DIR = "./functions";

async function loadRoutes() {
  const routes = new Map<string, any>();

  for await (const file of Deno.readDir(FUNCTIONS_DIR)) {
    if (file.isFile && file.name.endsWith(".ts")) {
      const name = file.name.replace(".ts", "");
      const module = await import(`${FUNCTIONS_DIR}/${file.name}`);
      routes.set(`/api/${name}`, module.handler);
    }
  }

  return routes;
}

const routes = await loadRoutes();

Deno.serve(async (req) => {
  const url = new URL(req.url);
  const route = routes.get(url.pathname);

  if (url.pathname === "/") {
    return new Response(
      JSON.stringify({
        message: "🚀 Welcome to your Deno Serverless API",
        endpoints: Array.from(routes.keys()),
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  }

  return await logger(req, async () => {
    if (route) {
      return await route(req);
    }
    return new Response("Not Found", { status: 404 });
  });
});
