import SQLite from 'react-native-sqlite-storage';
import { DATABASE_NAME, CREATE_AUTH_LOGS_TABLE, CREATE_EMPLOYEES_TABLE, CREATE_SYNC_QUEUE_TABLE } from './schema';

SQLite.enablePromise(true);

export class DatabaseService {
  private db: SQLite.SQLiteDatabase | null = null;

  async initialize(): Promise<void> {
    this.db = await SQLite.openDatabase({ name: DATABASE_NAME, location: 'default' });
    await this.db.executeSql(CREATE_EMPLOYEES_TABLE);
    await this.db.executeSql(CREATE_AUTH_LOGS_TABLE);
    await this.db.executeSql(CREATE_SYNC_QUEUE_TABLE);
  }

  getDatabase() {
    if (!this.db) {
      throw new Error('Database has not been initialized.');
    }

    return this.db;
  }
}