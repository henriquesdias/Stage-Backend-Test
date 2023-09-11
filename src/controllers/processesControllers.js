import processesServices from "../services/processesServices.js";

async function createProcess(req, res) {
  try {
    const { title, description } = res.locals.body;
    await processesServices.createProcess(title, description);
    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(400);
  }
}
async function deleteProcess(req, res) {
  try {
    const { id } = req.params;
    await processesServices.deleteProcess(id);
    res.sendStatus(204);
  } catch (error) {
    if (error.name === "notFound") {
      return res.sendStatus(404);
    }
    res.sendStatus(400);
  }
}
async function getProcesses(req, res) {
  try {
    const processes = await processesServices.getProcesses();
    res.send(processes);
  } catch (error) {
    res.sendStatus(400);
  }
}
async function updateProcess(req, res) {
  const { id } = req.params;
  try {
    const { title, description } = res.locals.body;
    await processesServices.updateProcess(id, title, description);
    res.sendStatus(200);
  } catch (error) {
    if (error.name === "notFound") {
      return res.sendStatus(404);
    }
    res.sendStatus(400);
  }
}
async function getuniqueProcess(req, res) {
  const { id } = req.params;
  try {
    const process = await processesServices.getuniqueProcess(id);
    res.send(process);
  } catch (error) {
    if (error.name === "notFound") {
      return res.sendStatus(404);
    }
    res.sendStatus(400);
  }
}

const processesControllers = {
  createProcess,
  deleteProcess,
  getProcesses,
  updateProcess,
  getuniqueProcess,
};

export default processesControllers;
