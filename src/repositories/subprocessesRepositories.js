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
  return db.query('SELECT * FROM subprocesses WHERE "process_id" = $1;', [
    process_id,
  ]);
}
async function getUniqueSubprocess(id) {
  return db.query("SELECT * FROM subprocesses WHERE id = $1", [id]);
}
async function getListOfIds(process_id) {
  return db.query("SELECT id FROM subprocesses WHERE process_id = $1", [
    process_id,
  ]);
}
async function deleteSubprocess(subprocesses_id) {
  return db.query("DELETE FROM subprocesses WHERE id = $1", [subprocesses_id]);
}

const subprocessesRepositories = {
  deleteAllSubprocesses,
  createSubprocess,
  getAllSubprocesses,
  getUniqueSubprocess,
  getListOfIds,
  deleteSubprocess,
};

export default subprocessesRepositories;
