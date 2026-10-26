-- PISA Leaderboard
CREATE TABLE IF NOT EXISTS pisa_leaderboard (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  username TEXT,
  total_xp INTEGER NOT NULL DEFAULT 0,
  best_level INTEGER NOT NULL DEFAULT 1,
  total_sessions INTEGER NOT NULL DEFAULT 0,
  total_correct INTEGER NOT NULL DEFAULT 0,
  total_questions INTEGER NOT NULL DEFAULT 0,
  domain_scores TEXT NOT NULL DEFAULT '{}',
  updated_at INTEGER NOT NULL DEFAULT (unixepoch())
);

CREATE INDEX IF NOT EXISTS idx_pisa_leaderboard_xp
  ON pisa_leaderboard(total_xp DESC);

CREATE UNIQUE INDEX IF NOT EXISTS idx_pisa_leaderboard_user
  ON pisa_leaderboard(user_id);
