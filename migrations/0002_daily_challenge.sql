PRAGMA foreign_keys = ON;

-- =========================================================
-- DAILY CHALLENGES
-- Har soatda o'tkaziladigan challenge
-- =========================================================

CREATE TABLE IF NOT EXISTS daily_challenges (
  id TEXT PRIMARY KEY,

  -- Masalan: 2026-10-03
  challenge_date TEXT NOT NULL,

  -- Uzbekistan vaqtidagi soat: 5, 6, 7 ... 22
  hour_local INTEGER NOT NULL,

  -- Kunlik curriculum kuni:
  -- 1-10 = alohida modul
  -- 11-13 = guruhlangan modullar
  -- 14-15 = guruhlangan modullar
  -- 16+ = barcha modullar
  day_number INTEGER NOT NULL,

  -- Masalan: ["m1"] yoki ["m1","m2","m3"]
  module_ids_json TEXT NOT NULL,

  start_at INTEGER NOT NULL,
  end_at INTEGER NOT NULL,

  total_questions INTEGER NOT NULL DEFAULT 25,
  points_per_correct INTEGER NOT NULL DEFAULT 2,
  max_score INTEGER NOT NULL DEFAULT 50,

  status TEXT NOT NULL DEFAULT 'scheduled',

  created_at INTEGER NOT NULL,

  UNIQUE(challenge_date, hour_local)
);

CREATE INDEX IF NOT EXISTS idx_daily_challenges_date
ON daily_challenges(challenge_date);

CREATE INDEX IF NOT EXISTS idx_daily_challenges_status
ON daily_challenges(status);

CREATE INDEX IF NOT EXISTS idx_daily_challenges_start
ON daily_challenges(start_at);


-- =========================================================
-- CHALLENGE QUESTIONS
-- Har bir challenge ichiga tushgan 25 ta savol
-- =========================================================

CREATE TABLE IF NOT EXISTS challenge_questions (
  challenge_id TEXT NOT NULL,

  question_id TEXT NOT NULL,

  category_id TEXT,

  topic_id TEXT NOT NULL,

  level TEXT NOT NULL,

  order_index INTEGER NOT NULL,

  created_at INTEGER NOT NULL,

  PRIMARY KEY (challenge_id, question_id),

  FOREIGN KEY (challenge_id)
    REFERENCES daily_challenges(id)
    ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_challenge_questions_challenge
ON challenge_questions(challenge_id);

CREATE INDEX IF NOT EXISTS idx_challenge_questions_topic
ON challenge_questions(topic_id);


-- =========================================================
-- CHALLENGE PARTICIPANTS
-- Kim challenge'da qatnashganini saqlaydi
-- =========================================================

CREATE TABLE IF NOT EXISTS challenge_participants (
  challenge_id TEXT NOT NULL,

  telegram_id TEXT NOT NULL,

  started_at INTEGER,

  submitted_at INTEGER,

  correct INTEGER NOT NULL DEFAULT 0,

  total INTEGER NOT NULL DEFAULT 25,

  score INTEGER NOT NULL DEFAULT 0,

  duration_sec INTEGER NOT NULL DEFAULT 0,

  status TEXT NOT NULL DEFAULT 'started',

  created_at INTEGER NOT NULL,

  updated_at INTEGER NOT NULL,

  PRIMARY KEY (challenge_id, telegram_id),

  FOREIGN KEY (challenge_id)
    REFERENCES daily_challenges(id)
    ON DELETE CASCADE,

  FOREIGN KEY (telegram_id)
    REFERENCES users(telegram_id)
    ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_challenge_participants_challenge
ON challenge_participants(challenge_id);

CREATE INDEX IF NOT EXISTS idx_challenge_participants_score
ON challenge_participants(challenge_id, score DESC);

CREATE INDEX IF NOT EXISTS idx_challenge_participants_user
ON challenge_participants(telegram_id);


-- =========================================================
-- CHALLENGE ANSWERS
-- Har bir berilgan javob
-- =========================================================

CREATE TABLE IF NOT EXISTS challenge_answers (
  challenge_id TEXT NOT NULL,

  telegram_id TEXT NOT NULL,

  question_id TEXT NOT NULL,

  selected_answer INTEGER,

  is_correct INTEGER NOT NULL DEFAULT 0,

  answered_at INTEGER NOT NULL,

  PRIMARY KEY (
    challenge_id,
    telegram_id,
    question_id
  ),

  FOREIGN KEY (challenge_id)
    REFERENCES daily_challenges(id)
    ON DELETE CASCADE,

  FOREIGN KEY (telegram_id)
    REFERENCES users(telegram_id)
    ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_challenge_answers_challenge
ON challenge_answers(challenge_id);

CREATE INDEX IF NOT EXISTS idx_challenge_answers_user
ON challenge_answers(telegram_id);


-- =========================================================
-- DAILY LEADERBOARD
-- Kunlik umumiy natijalar
-- =========================================================

CREATE TABLE IF NOT EXISTS daily_leaderboard (
  challenge_date TEXT NOT NULL,

  telegram_id TEXT NOT NULL,

  challenges_count INTEGER NOT NULL DEFAULT 0,

  total_correct INTEGER NOT NULL DEFAULT 0,

  total_questions INTEGER NOT NULL DEFAULT 0,

  total_score INTEGER NOT NULL DEFAULT 0,

  total_duration_sec INTEGER NOT NULL DEFAULT 0,

  best_score INTEGER NOT NULL DEFAULT 0,

  rank INTEGER,

  created_at INTEGER NOT NULL,

  updated_at INTEGER NOT NULL,

  PRIMARY KEY (challenge_date, telegram_id),

  FOREIGN KEY (telegram_id)
    REFERENCES users(telegram_id)
    ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_daily_leaderboard_date_score
ON daily_leaderboard(challenge_date, total_score DESC);

CREATE INDEX IF NOT EXISTS idx_daily_leaderboard_user
ON daily_leaderboard(telegram_id);


-- =========================================================
-- WEEKLY LEADERBOARD
-- Haftalik umumiy natijalar
-- =========================================================

CREATE TABLE IF NOT EXISTS weekly_leaderboard (
  week_start TEXT NOT NULL,

  telegram_id TEXT NOT NULL,

  challenges_count INTEGER NOT NULL DEFAULT 0,

  total_correct INTEGER NOT NULL DEFAULT 0,

  total_questions INTEGER NOT NULL DEFAULT 0,

  total_score INTEGER NOT NULL DEFAULT 0,

  total_duration_sec INTEGER NOT NULL DEFAULT 0,

  best_score INTEGER NOT NULL DEFAULT 0,

  rank INTEGER,

  created_at INTEGER NOT NULL,

  updated_at INTEGER NOT NULL,

  PRIMARY KEY (week_start, telegram_id),

  FOREIGN KEY (telegram_id)
    REFERENCES users(telegram_id)
    ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_weekly_leaderboard_score
ON weekly_leaderboard(week_start, total_score DESC);

CREATE INDEX IF NOT EXISTS idx_weekly_leaderboard_user
ON weekly_leaderboard(telegram_id);
