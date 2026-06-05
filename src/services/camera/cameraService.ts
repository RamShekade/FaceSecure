export interface CameraFrame {
  timestamp: number;
  width: number;
  height: number;
  data: Uint8Array;
}

export class CameraService {
  async start(): Promise<void> {
    return;
  }

  async stop(): Promise<void> {
    return;
  }

  async captureFrame(): Promise<CameraFrame | null> {
    return null;
  }
}