-- schema/05_create_user_stickers.sql
DROP TABLE IF EXISTS user_stickers CASCADE;
-- CREATE USER_STICKERS
CREATE TABLE user_stickers (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  sticker_id INT REFERENCES stickers(id) ON DELETE CASCADE
);


