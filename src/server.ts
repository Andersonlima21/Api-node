import { app } from "./app";
import { connectDB } from "./config/db";
import { env } from "./config/env";
import { logger } from "./utils/logger";

async function bootstrap() {
  await connectDB();
  app.listen(env.PORT, () => {
    logger.info(`Servidor rodando na porta ${env.PORT} [${env.NODE_ENV}]`);
  });
}

bootstrap().catch((err) => {
  logger.error(`Falha ao iniciar o servidor: ${err.message}`);
  process.exit(1);
});
