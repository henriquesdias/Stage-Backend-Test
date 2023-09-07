import db from "../config/database.js";

async function createEvent({ title, subprocess_id, date, time, notes }) {
  return db.query(
    'INSERT INTO events (title,"subprocess_id", date, time, notes) VALUES ($1,$2,$3,$4, $5);',
    [title, subprocess_id, date, time, notes]
  );
}
async function getAllEvents(subprocess_id) {
  return db.query('SELECT * FROM events WHERE "subprocess_id" = $1', [
    subprocess_id,
  ]);
}

const eventsRepositories = {
  createEvent,
  getAllEvents,
};

export default eventsRepositories;
