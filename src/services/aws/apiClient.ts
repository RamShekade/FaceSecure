export interface SyncPayload {
  employeeId: string;
  timestamp: string;
  result: 'verified' | 'rejected';
}

export class ApiClient {
  constructor(private readonly baseUrl: string) {}

  async pushAuthenticationLog(payload: SyncPayload): Promise<void> {
    void payload;
    void this.baseUrl;
  }
}