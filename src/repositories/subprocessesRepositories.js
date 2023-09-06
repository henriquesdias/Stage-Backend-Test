import db from "../config/database.js";

async function deleteAllSubprocesses(process_id) {
  return db.query('DELETE FROM subprocesses WHERE "process_id" = $1', [
    process_id,
  ]);
}

const subprocessesRepositories = {
  deleteAllSubprocesses,
};

export default subprocessesRepositories;
