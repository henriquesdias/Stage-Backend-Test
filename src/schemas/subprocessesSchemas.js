import joi from "joi";

const subprocessSchema = joi.object({
  process_id: joi.number().required(),
  title: joi.string().min(2).max(50).trim().required(),
  description: joi.string().min(2).max(100).trim().required(),
});

const subprocessesSchemas = {
  subprocessSchema,
};

export default subprocessesSchemas;
