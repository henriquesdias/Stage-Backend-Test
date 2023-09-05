import connection from "./database/config.js";

async function createTables() {
  await connection.query(
    `CREATE TABLE "processes" (
      "id" SERIAL PRIMARY KEY,
      "title" varchar(50) NOT NULL,
      "description" varchar(100) NOT NULL
  );`
  );
  await connection.query(
    `CREATE TABLE "subprocesses" (
        "id" SERIAL PRIMARY KEY,
        "title" varchar(50) NOT NULL,
        "description" varchar(100) NOT NULL,
        "process_id" INTEGER NOT NULL REFERENCES "processes"("id")
    );`
  );
}

createTables()
  .then(() => {
    console.log("Tables created successfully.");
  })
  .catch((error) => {
    console.log(error);
  });
