import errors from "../errors.js";
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

  return (await eventsRepositories.getAllEvents(subprocess_id)).rows;
}
async function deleteEvent(event_id) {
  const event = await eventsRepositories.getUniqueEvent(event_id);
  if (event.rowCount === 0) {
    errors.notFound("This event do not exists");
  }
  return eventsRepositories.deleteEvent(event_id);
}

const eventsServices = {
  createEvent,
  getAllEvents,
  deleteEvent,
};

export default eventsServices;
