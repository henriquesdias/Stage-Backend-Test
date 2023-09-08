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
    res.sendStatus(400);
  }
}
async function getAllSubprocesses(req, res) {
  const { id } = req.params;
  try {
    const subprocesses = await subprocessesServices.getAllSubprocesses(id);
    res.send(subprocesses);
  } catch (error) {
    if (error.name === "notFound") {
      return res.sendStatus(404);
    }
    res.sendStatus(400);
  }
}

const subprocessesControllers = {
  createSubprocess,
  getAllSubprocesses,
};

export default subprocessesControllers;
