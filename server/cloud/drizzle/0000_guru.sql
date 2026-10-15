CREATE TABLE users (
  id TEXT PRIMARY KEY, username TEXT NOT NULL COLLATE NOCASE UNIQUE,
  email TEXT NOT NULL COLLATE NOCASE UNIQUE, password_hash TEXT NOT NULL,
  salt TEXT NOT NULL, created_at TEXT NOT NULL
);
--> statement-breakpoint
CREATE TABLE sessions (
  token_hash TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id), expires_at INTEGER NOT NULL
);
--> statement-breakpoint
CREATE TABLE results (
  id TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id), exam_type TEXT NOT NULL,
  correct INTEGER NOT NULL, total INTEGER NOT NULL, percentage REAL NOT NULL,
  wrong_questions TEXT NOT NULL, topics TEXT NOT NULL, timestamp TEXT NOT NULL
);
--> statement-breakpoint
CREATE INDEX results_user ON results(user_id);
--> statement-breakpoint
CREATE INDEX results_exam ON results(exam_type);
--> statement-breakpoint
CREATE TABLE auth_attempts (key TEXT PRIMARY KEY, count INTEGER NOT NULL, expires_at INTEGER NOT NULL);
