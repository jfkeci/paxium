import * as Joi from 'joi';

export const envValidation = (): Joi.ObjectSchema<any> =>
  Joi.object({
    API_PORT: Joi.number().default(12256),
    API_PREFIX: Joi.string().default('api'),
    API_ENVIRONMENT: Joi.string()
      .valid('development', 'production')
      .default('development'),
    // DATABASE
    DATABASE_URL: Joi.string().exist(),
    DB_PRISMA_LOGGER_ENABLED: Joi.boolean().default(false),
    LOGGER_LEVEL: Joi.string().default('info'),
    // JWT
    JWT_SECRET: Joi.string().exist(),
    JWT_EXPIRY: Joi.string(),
    // CORS
    CORS_ORIGINS: Joi.string().exist(),
    // CONFIG
    CONFIG_IS_EMAIL_SERVICE_ENABLED: Joi.boolean().default(false),
    CONFIG_IS_ERROR_MODE_ENABLED: Joi.boolean().default(false),
  });
