import eventsServices from "../services/eventsServices.js";

async function createEvent(req, res) {
  const { subprocess_id } = req.params;
  const { title, notes, date, time } = res.locals.body;
  try {
    await eventsServices.createEvent({
      title,
      notes,
      subprocess_id,
      date,
      time,
    });
    res.sendStatus(201);
  } catch (error) {
    if (error.name === "notFound") {
      return res.sendStatus(404);
    }
    res.sendStatus(400);
  }
}
async function getAllEvents(req, res) {
  const { subprocess_id } = req.params;
  try {
    const events = await eventsServices.getAllEvents(subprocess_id);
    res.send(events);
  } catch (error) {
    if (error.name === "notFound") {
      return res.sendStatus(404);
    }
    res.sendStatus(400);
  }
}
async function deleteEvent(req, res) {
  const { event_id } = req.params;
  try {
    await eventsServices.deleteEvent(event_id);
    res.send(204);
  } catch (error) {
    if (error.name === "notFound") {
      return res.sendStatus(404);
    }
    res.sendStatus(400);
  }
}

const eventsControllers = {
  createEvent,
  getAllEvents,
  deleteEvent,
};

export default eventsControllers;
