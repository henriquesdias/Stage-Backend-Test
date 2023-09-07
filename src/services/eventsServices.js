import eventsRepositories from "../repositories/eventsRepositories.js";
import subprocessesRepositories from "../repositories/subprocessesRepositories.js";

async function createEvent({ title, subprocess_id, date, time, notes }) {
  const subprocess =
    await subprocessesRepositories.getUniqueSubprocess(subprocess_id);
  if (subprocess.rowCount === 0) {
    throw { message: "This subprocess do not exists", name: "notFound" };
  }
  return eventsRepositories.createEvent({
    title,
    subprocess_id,
    date,
    time,
    notes: notes ? notes : null,
  });
}
async function getAllEvents(subprocess_id) {
  const subprocess =
    await subprocessesRepositories.getUniqueSubprocess(subprocess_id);
  if (subprocess.rowCount === 0) {
    throw { message: "This subprocess do not exists", name: "notFound" };
  }
  const events = (await eventsRepositories.getAllEvents(subprocess_id)).rows;

  return events;
}

const eventsServices = {
  createEvent,
  getAllEvents,
};

export default eventsServices;
