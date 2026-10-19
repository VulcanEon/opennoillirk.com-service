CREATE TABLE IF NOT EXISTS runs (
  id TEXT PRIMARY KEY,
  root TEXT NOT NULL,
  device_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  mode TEXT NOT NULL,
  date TEXT,
  seed INTEGER,
  bank INTEGER,
  length INTEGER NOT NULL,
  rounds TEXT NOT NULL,
  points INTEGER NOT NULL,
  people INTEGER NOT NULL,
  title TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS runs_root_score ON runs(root, points DESC, created_at);
CREATE INDEX IF NOT EXISTS runs_daily_score ON runs(mode, date, points);
CREATE TABLE IF NOT EXISTS refused_answers (
  prompt_id TEXT NOT NULL,
  answer TEXT NOT NULL,
  count INTEGER NOT NULL DEFAULT 1,
  reported INTEGER NOT NULL DEFAULT 0,
  updated_at INTEGER NOT NULL,
  PRIMARY KEY (prompt_id, answer)
);
