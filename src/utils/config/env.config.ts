import { ConfigModuleOptions } from '@nestjs/config';
import { envValidation } from './env-validation.config';

const configuration = () => ({
  api: {
    port: parseInt(process.env.API_PORT, 10) || 3000,
    prefix: process.env.API_PREFIX ?? 'api',
    environment: process.env.API_ENVIRONMENT,
  },
  /** DATABASE */
  db: {
    url: process.env.DATABASE_URL,
    isPrismaLoggerEnabled: JSON.parse(
      process.env.DB_PRISMA_LOGGER_ENABLED ?? 'false',
    ),
  },
  /** JWT */
  jwt: {
    secret: process.env.JWT_SECRET,
    expiry: process.env.JWT_EXPIRY,
  },
  /** CONFIG */
  config: {
    isEmailServiceEnabled: JSON.parse(
      process.env.CONFIG_IS_EMAIL_SERVICE_ENABLED ?? 'false',
    ),
    isErrorModeEnabled: JSON.parse(
      process.env.CONFIG_IS_ERROR_MODE_ENABLED ?? 'false',
    ),
  },
  cors: {
    origins: process.env.CORS_ORIGINS,
  },
});

export const envConfig = (): ConfigModuleOptions => {
  return <ConfigModuleOptions>{
    isGlobal: true,
    envFilePath: '.env',
    validationSchema: envValidation(),
    load: [configuration],
  };
};
