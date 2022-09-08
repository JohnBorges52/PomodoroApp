-- schema/03_create_breaks.sql
DROP TABLE IF EXISTS breaks CASCADE;
-- CREATE BREAKS
CREATE TABLE breaks (
  id SERIAL PRIMARY KEY,
  user_id integer REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  pomodoro_id integer REFERENCES pomodoros(id) ON DELETE CASCADE NOT NULL,
duration INTEGER NOT NULL
  );