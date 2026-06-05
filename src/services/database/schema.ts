export const DATABASE_NAME = 'facesecure.db';

export const CREATE_EMPLOYEES_TABLE = `
  CREATE TABLE IF NOT EXISTS employees (
    employee_id TEXT PRIMARY KEY,
    encrypted_embeddings TEXT NOT NULL,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );
`;

export const CREATE_AUTH_LOGS_TABLE = `
  CREATE TABLE IF NOT EXISTS authentication_logs (
    id TEXT PRIMARY KEY,
    employee_id TEXT NOT NULL,
    result TEXT NOT NULL,
    sync_status TEXT NOT NULL,
    timestamp TEXT NOT NULL
  );
`;

export const CREATE_SYNC_QUEUE_TABLE = `
  CREATE TABLE IF NOT EXISTS sync_queue (
    id TEXT PRIMARY KEY,
    type TEXT NOT NULL,
    payload TEXT NOT NULL,
    status TEXT NOT NULL,
    created_at TEXT NOT NULL
  );
`;