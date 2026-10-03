PRAGMA foreign_keys = ON;

-- =========================================================
-- USERS
-- Telegram foydalanuvchilari
-- =========================================================

CREATE TABLE IF NOT EXISTS users (
  telegram_id TEXT PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  username TEXT,

  xp INTEGER NOT NULL DEFAULT 0,
  level INTEGER NOT NULL DEFAULT 1,

  tests_count INTEGER NOT NULL DEFAULT 0,
  total_correct INTEGER NOT NULL DEFAULT 0,
  total_questions INTEGER NOT NULL DEFAULT 0,

  best_score INTEGER NOT NULL DEFAULT 0,

  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_users_xp
ON users(xp DESC);

CREATE INDEX IF NOT EXISTS idx_users_best_score
ON users(best_score DESC);


-- =========================================================
-- ATTEMPTS
-- Har bir ishlangan test
-- =========================================================

CREATE TABLE IF NOT EXISTS attempts (
  id TEXT PRIMARY KEY,

  telegram_id TEXT NOT NULL,

  category_id TEXT,
  topic_id TEXT,
  level TEXT,

  correct INTEGER NOT NULL DEFAULT 0,
  total INTEGER NOT NULL DEFAULT 0,
  score INTEGER NOT NULL DEFAULT 0,

  duration_sec INTEGER NOT NULL DEFAULT 0,

  created_at INTEGER NOT NULL,

  FOREIGN KEY (telegram_id)
    REFERENCES users(telegram_id)
    ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_attempts_user
ON attempts(telegram_id);

CREATE INDEX IF NOT EXISTS idx_attempts_topic
ON attempts(topic_id);

CREATE INDEX IF NOT EXISTS idx_attempts_created
ON attempts(created_at DESC);


-- =========================================================
-- TOPIC STATS
-- Foydalanuvchining mavzu bo‘yicha natijalari
-- =========================================================

CREATE TABLE IF NOT EXISTS topic_stats (
  telegram_id TEXT NOT NULL,
  topic_id TEXT NOT NULL,

  attempts INTEGER NOT NULL DEFAULT 0,
  correct INTEGER NOT NULL DEFAULT 0,
  total INTEGER NOT NULL DEFAULT 0,

  updated_at INTEGER NOT NULL,

  PRIMARY KEY (telegram_id, topic_id),

  FOREIGN KEY (telegram_id)
    REFERENCES users(telegram_id)
    ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_topic_stats_user
ON topic_stats(telegram_id);


-- =========================================================
-- ACHIEVEMENTS
-- Yutuqlar / badge'lar
-- =========================================================

CREATE TABLE IF NOT EXISTS achievements (
  telegram_id TEXT NOT NULL,
  achievement_id TEXT NOT NULL,

  earned_at INTEGER NOT NULL,

  PRIMARY KEY (telegram_id, achievement_id),

  FOREIGN KEY (telegram_id)
    REFERENCES users(telegram_id)
    ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_achievements_user
ON achievements(telegram_id);
