ALTER TABLE runs ADD COLUMN stage TEXT NOT NULL DEFAULT 'climb';
ALTER TABLE runs ADD COLUMN first_daily INTEGER NOT NULL DEFAULT 0;
CREATE INDEX IF NOT EXISTS runs_device_day ON runs(device_hash,mode,date,created_at);
CREATE TABLE IF NOT EXISTS feedback (
 device_hash TEXT NOT NULL, feedback_key TEXT NOT NULL, kind TEXT NOT NULL,
 payload TEXT NOT NULL, updated_at INTEGER NOT NULL,
 PRIMARY KEY(device_hash,feedback_key)
);
CREATE TABLE IF NOT EXISTS suggestions (
 id INTEGER PRIMARY KEY AUTOINCREMENT, question TEXT NOT NULL, note TEXT NOT NULL,
 created_at INTEGER NOT NULL
);
