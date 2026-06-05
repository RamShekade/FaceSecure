import { DatabaseService } from './databaseService';
import type { AuthenticationLog, SyncQueueItem } from '@/types/sync';

export class Repository {
  constructor(private readonly databaseService: DatabaseService) {}

  async saveAuthenticationLog(log: AuthenticationLog): Promise<void> {
    const database = this.databaseService.getDatabase();
    const id = createLocalId();
    await database.executeSql(
      'INSERT OR REPLACE INTO authentication_logs (id, employee_id, result, sync_status, timestamp) VALUES (?, ?, ?, ?, ?)',
      [id, log.employeeId, log.result, log.syncStatus, log.timestamp]
    );
  }

  async queueSyncItem(item: SyncQueueItem): Promise<void> {
    const database = this.databaseService.getDatabase();
    await database.executeSql(
      'INSERT OR REPLACE INTO sync_queue (id, type, payload, status, created_at) VALUES (?, ?, ?, ?, ?)',
      [item.id, item.type, JSON.stringify(item.payload), item.status, item.createdAt]
    );
  }
}

function createLocalId(): string {
  return `log_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
}