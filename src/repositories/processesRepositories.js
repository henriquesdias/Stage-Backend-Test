import db from "../config/database.js";

async function createProcess(title, description) {
  return db.query(
    'INSERT INTO processes ("title", "description") VALUES ($1,$2)',
    [title, description]
  );
}
async function deleteProcess(id) {
  return db.query("DELETE FROM processes WHERE id = $1", [id]);
}
async function getProcessById(id) {
  return db.query("SELECT * FROM processes WHERE id = $1", [id]);
}
async function getProcesses() {
  return db.query("SELECT * FROM processes");
}
async function updateProcess(id, title, description) {
  return db.query(
    "UPDATE processes SET title = $1 , description = $2 WHERE id = $3;",
    [title, description, id]
  );
}

const processesRepositories = {
  createProcess,
  deleteProcess,
  getProcessById,
  getProcesses,
  updateProcess,
};

export default processesRepositories;
