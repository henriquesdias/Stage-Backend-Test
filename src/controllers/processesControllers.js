import processesRepositories from "../repositories/processesRepositories.js";

async function createProcess(req, res) {
  try {
    const { title, description } = res.locals.body;
    await processesRepositories.createProcess(title, description);
    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }
}

const processesControllers = {
  createProcess,
};

export default processesControllers;
