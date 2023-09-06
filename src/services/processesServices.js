import processesRepositories from "../repositories/processesRepositories.js";
import subprocessesRepositories from "../repositories/subprocessesRepositories.js";

async function createProcess(title, description) {
  return processesRepositories.createProcess(title, description);
}
async function deleteProcess(id) {
  const process = await processesRepositories.getProcessById(id);
  if (process.rowCount === 0) {
    throw { message: "This process do not exists", name: "notFound" };
  }
  await subprocessesRepositories.deleteAllSubprocesses(id);
  await processesRepositories.deleteProcess(id);
}
async function getProcesses() {
  return (await processesRepositories.getProcesses()).rows;
}

const processesServices = {
  createProcess,
  deleteProcess,
  getProcesses,
};

export default processesServices;
