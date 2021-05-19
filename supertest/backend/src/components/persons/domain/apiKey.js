import Joi from 'joi'

const apiKey = Joi.string().regex(/^[0-9a-fA-F]+$/)

const apiKeySchema = Joi.object({
  apiKeyToken: apiKey.required(),
})
const apiKeyWithoutSchema = Joi.object({
  apiKeyToken: apiKey.empty(),
})

export {
  apiKey,
  apiKeySchema,
  apiKeyWithoutSchema,
}
