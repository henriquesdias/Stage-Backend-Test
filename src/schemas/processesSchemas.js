import joi from "joi";

const processSchema = joi.object({
  title: joi.string().min(2).max(50).trim().required(),
  description: joi.string().min(2).max(100).trim().required(),
});

const processSchemas = {
  processSchema,
};

export default processSchemas;
