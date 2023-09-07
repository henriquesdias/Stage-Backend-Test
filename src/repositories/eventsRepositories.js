import db from "../config/database.js";

async function createEvent({ title, subprocess_id, date, time, notes }) {
  return db.query(
    'INSERT INTO events (title,"subprocess_id", date, time, notes) VALUES ($1,$2,$3,$4, $5);',
    [title, subprocess_id, date, time, notes]
  );
}

const eventsRepositories = {
  createEvent,
};

export default eventsRepositories;
