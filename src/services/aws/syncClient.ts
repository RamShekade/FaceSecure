import { ApiClient } from './apiClient';
import type { SyncQueueItem } from '@/types/sync';

export class SyncClient {
  constructor(private readonly apiClient: ApiClient) {}

  async syncQueueItem(item: SyncQueueItem): Promise<void> {
    if (item.type === 'authentication-log') {
      await this.apiClient.pushAuthenticationLog(item.payload as never);
    }
  }
}