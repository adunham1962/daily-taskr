import fs from "fs";
import sqlite3 from "sqlite3";

const db_path = "db\\db.sqlite";
const instructions_path = "db\\init_db.sql";

if (!fs.existsSync(process.env.SQLITE)) {
  process.exit(1);
}

try {
  if (!fs.existsSync(db_path)) {
    const db = new sqlite3.Database(db_path);
    const instructions = fs.readFileSync(instructions_path, { encoding: "utf-8" });

    db.serialize(() => {
      db.exec(instructions, (err) => {
        if (err) {
          process.exit(1);
        }
      });
    });

    db.close();
  }
} catch (streamError) {
  console.error(streamError);
}
