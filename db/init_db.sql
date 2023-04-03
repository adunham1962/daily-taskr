PRAGMA synchronous = OFF;
PRAGMA journal_mode = MEMORY;

BEGIN TRANSACTION;

CREATE TABLE lists (
  name text NOT NULL DEFAULT '',
  completed text,
  todo text,
  PRIMARY KEY (name)
);

END TRANSACTION;
