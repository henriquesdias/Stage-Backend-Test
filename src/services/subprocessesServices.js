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

const subprocessesServices = {
  createSubprocess,
};

export default subprocessesServices;
