import db from "./config/database.js";

async function createTables() {
  await db.query(
    `CREATE TABLE "processes" (
      "id" SERIAL PRIMARY KEY,
      "title" varchar(50) NOT NULL,
      "description" varchar(100) NOT NULL
  );`
  );
  await db.query(
    `CREATE TABLE "subprocesses" (
        "id" SERIAL PRIMARY KEY,
        "title" varchar(50) NOT NULL,
        "description" varchar(100) NOT NULL,
        "process_id" INTEGER NOT NULL REFERENCES "processes"("id")
    );`
  );
  await db.query(`
    CREATE TABLE events (
      id SERIAL PRIMARY KEY,
      title VARCHAR(50) NOT NULL,
      "subprocess_id" INTEGER NOT NULL REFERENCES "subprocesses"("id"),
      notes VARCHAR(200),
      date DATE NOT NULL,
      time TIME NOT NULL,
      completed BOOLEAN NOT NULL DEFAULT false
);
  `);
}

createTables()
  .then(() => {
    console.log("Tables created successfully.");
  })
  .catch((error) => {
    console.log(error);
  });
