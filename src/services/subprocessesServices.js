import subprocessesRepositories from "../repositories/subprocessesRepositories.js";
import processesRepositories from "../repositories/processesRepositories.js";
import eventsRepositories from "../repositories/eventsRepositories.js";
import errors from "../errors.js";

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
async function deleteSubprocess(subprocess_id) {
  const subprocess =
    await subprocessesRepositories.getUniqueSubprocess(subprocess_id);
  if (subprocess.rowCount === 0) {
    errors.notFound("This subprocess do not exists");
  }
  await eventsRepositories.deleteAllEvents(subprocess_id);
  await subprocessesRepositories.deleteSubprocess(subprocess_id);
}

const subprocessesServices = {
  createSubprocess,
  getAllSubprocesses,
  deleteSubprocess,
};

export default subprocessesServices;
