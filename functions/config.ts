import { config } from "../config.ts";

export const handler = () => {
  return new Response(JSON.stringify(config), {
    headers: { "Content-Type": "application/json" },
  });
};
