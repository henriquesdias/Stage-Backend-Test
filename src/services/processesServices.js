import processesRepositories from "../repositories/processesRepositories.js";
import subprocessesRepositories from "../repositories/subprocessesRepositories.js";
import eventsRepositories from "../repositories/eventsRepositories.js";
import errors from "../errors.js";

async function createProcess(title, description) {
  return processesRepositories.createProcess(title, description);
}
async function deleteProcess(id) {
  const process = await processesRepositories.getProcessById(id);
  if (process.rowCount === 0) {
    errors.notFound("This process do not exists");
  }
  const subprocessIds = await subprocessesRepositories.getListOfIds(id);
  subprocessIds.rows.map(async (e) => {
    await eventsRepositories.deleteEventBySubprocessId(e.id);
  });
  await subprocessesRepositories.deleteAllSubprocesses(id);
  await processesRepositories.deleteProcess(id);
}
async function getProcesses() {
  return (await processesRepositories.getProcesses()).rows;
}
async function updateProcess(id, title, description) {
  const process = await processesRepositories.getProcessById(id);
  if (process.rowCount === 0) {
    errors.notFound("This process do not exists");
  }
  return processesRepositories.updateProcess(id, title, description);
}
async function getuniqueProcess(process_id) {
  const process = await processesRepositories.getProcessById(process_id);
  if (process.rowCount === 0) {
    errors.notFound("This process do not exists");
  }
  return process.rows[0];
}

const processesServices = {
  createProcess,
  deleteProcess,
  getProcesses,
  updateProcess,
  getuniqueProcess,
};

export default processesServices;
