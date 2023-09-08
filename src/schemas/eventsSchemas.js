import joi from "joi";

const eventSchema = joi.object({
  title: joi.string().min(2).max(50).required(),
  notes: joi.string().min(2).max(200),
  date: joi.date().required(),
  time: joi.string().required(),
});

const eventsSchemas = {
  eventSchema,
};

export default eventsSchemas;
