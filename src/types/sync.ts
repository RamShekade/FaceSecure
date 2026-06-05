export interface SyncQueueItem {
  id: string;
  type: 'authentication-log' | 'enrollment' | 'audit';
  payload: unknown;
  status: 'queued' | 'syncing' | 'synced' | 'failed';
  createdAt: string;
}

export interface AuthenticationLog {
  employeeId: string;
  result: 'verified' | 'rejected';
  syncStatus: 'pending' | 'synced';
  timestamp: string;
}