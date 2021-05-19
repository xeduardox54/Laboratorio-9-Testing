import Joi from 'joi'

const getPersonSchema = Joi.object({
  apiKeyToken: Joi.string().regex(/^[0-9a-fA-F]+$/).empty()
})

const createPersonSchema = Joi.object({
  name: Joi.string().required(),
  number: Joi.string().required(),
})

const updatePersonSchema = Joi.object({
  name: Joi.string(),
  number: Joi.string(),
})

export {
  getPersonSchema,
  createPersonSchema,
  updatePersonSchema,
}
