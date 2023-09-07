import subprocessesRepositories from "../repositories/subprocessesRepositories.js";
import processesRepositories from "../repositories/processesRepositories.js";

async function createSubprocess(process_id, title, description) {
  const process = await processesRepositories.getProcessById(process_id);
  if (process.rowCount === 0) {
    throw { message: "This process do not exists", name: "notFound" };
  }

  return subprocessesRepositories.createSubprocess(
    process_id,
    title,
    description
  );
}
async function getAllSubprocesses(process_id) {
  const process = await processesRepositories.getProcessById(process_id);
  if (process.rowCount === 0) {
    throw { message: "This process do not exists", name: "notFound" };
  }

  return (await subprocessesRepositories.getAllSubprocesses(process_id)).rows;
}

const subprocessesServices = {
  createSubprocess,
  getAllSubprocesses,
};

export default subprocessesServices;
