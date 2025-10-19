// config.ts
import "@std/dotenv/load"; // .env dosyasını otomatik yükler

function getEnv(key: string, fallback?: string): string {
  const value = Deno.env.get(key);
  if (!value && fallback === undefined) {
    console.warn(`⚠️  Missing env var: ${key}`);
  }
  return value ?? fallback ?? "";
}

export const config = {
  appName: getEnv("APP_NAME", "DenoApp"),
  port: Number(getEnv("PORT", "8000")),
  debug: getEnv("DEBUG", "false") === "true",
  apiKey: getEnv("API_KEY"),
};
