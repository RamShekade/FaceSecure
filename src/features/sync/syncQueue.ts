import type { SyncQueueItem } from '@/types/sync';

export class SyncQueue {
  private readonly items: SyncQueueItem[] = [];

  enqueue(item: SyncQueueItem): void {
    this.items.push(item);
  }

  dequeue(): SyncQueueItem | undefined {
    return this.items.shift();
  }

  snapshot(): SyncQueueItem[] {
    return [...this.items];
  }
}