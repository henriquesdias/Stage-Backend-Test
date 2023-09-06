import subprocessesServices from "../services/subprocessesServices.js";

async function createSubprocess(req, res) {
  try {
    const { process_id, title, description } = res.locals.body;
    await subprocessesServices.createSubprocess(process_id, title, description);
    res.sendStatus(201);
  } catch (error) {
    if (error.name === "notFound") {
      return res.sendStatus(404);
    }
    console.log(error);
    res.sendStatus(400);
  }
}

const subprocessesControllers = {
  createSubprocess,
};

export default subprocessesControllers;
