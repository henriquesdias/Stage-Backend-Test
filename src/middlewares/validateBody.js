function validateBody(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      console.log(error.details.map((e) => e.message));
      return res.status(422).send(error.details.map((e) => e.message));
    }
    res.locals.body = value;
    next();
  };
}

export default validateBody;
