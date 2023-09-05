import processesRepositories from "../repositories/processesRepositories.js";

async function createProcess(title, description) {
  return processesRepositories.createProcess(title, description);
}
async function deleteProcess(id) {
  const process = await processesRepositories.getProcessById(id);
  if (process.rowCount === 0) {
    throw { message: "This process do not exists", name: "notFound" };
  }
  await processesRepositories.deleteProcess(id);
}

const processesServices = {
  createProcess,
  deleteProcess,
};

export default processesServices;
