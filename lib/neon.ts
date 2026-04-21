import postgres from "postgres";

/**
 * Cliente Postgres pro Neon. DB dedicado do Kaleidos Pay.
 * Idle timeout curto pro serverless não manter conexões abertas à toa.
 */
export const sql = postgres(process.env.DATABASE_URL!, {
  idle_timeout: 20,
  max: 10,
});
