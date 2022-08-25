-- schema/02_create_pomodoros.sql
DROP TABLE IF EXISTS urls CASCADE;
-- CREATE POMODOROS
CREATE TABLE pomodoros (
  id SERIAL PRIMARY KEY,
  user_id integer REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  start_at TIME NOT NULL,
  ended_at TIME NOT NULL
  );