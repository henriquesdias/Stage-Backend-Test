import db from "../config/database.js";

async function deleteAllSubprocesses(process_id) {
  return db.query('DELETE FROM subprocesses WHERE "process_id" = $1', [
    process_id,
  ]);
}
async function createSubprocess(process_id, title, description) {
  return db.query(
    'INSERT INTO subprocesses ("process_id", title, description) VALUES ($1, $2, $3)',
    [process_id, title, description]
  );
}
async function getAllSubprocesses(process_id) {
  return db.query('SELECT * FROM subprocesses WHERE "process_id" = $1', [
    process_id,
  ]);
}
async function getUniqueSubprocess(id) {
  return db.query("SELECT * FROM subprocesses WHERE id = $1", [id]);
}

const subprocessesRepositories = {
  deleteAllSubprocesses,
  createSubprocess,
  getAllSubprocesses,
  getUniqueSubprocess,
};

export default subprocessesRepositories;
