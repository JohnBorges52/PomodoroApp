-- schema/02_create_pomodoros.sql
DROP TABLE IF EXISTS pomodoros CASCADE;
-- CREATE POMODOROS
CREATE TABLE pomodoros (
  id SERIAL PRIMARY KEY,
  user_id integer REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  duration integer NOT NULL
  );