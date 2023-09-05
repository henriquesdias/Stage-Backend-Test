import db from "../config/database.js";

async function createProcess(title, description) {
  return db.query(
    `INSERT INTO processes ("title", "description") VALUES ($1,$2)`,
    [title, description]
  );
}

const processesRepositories = {
  createProcess,
};

export default processesRepositories;
