-- schema/05_create_user_stickers.sql
DROP TABLE IF EXISTS user_stickers CASCADE;
-- CREATE USER_STICKERS
CREATE TABLE user_stickers (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  sticker_id INT REFERENCES stickers(id),
  title VARCHAR(255) NOT NULL,
  active  BOOLEAN NOT NULL DEFAULT FALSE
);