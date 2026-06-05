import type { CameraFrame } from '@/services/camera/cameraService';

export type LivenessChallenge = 'blink' | 'head-turn' | 'smile';

export interface LivenessResult {
  passed: boolean;
  challenge: LivenessChallenge;
  confidence: number;
}

export class LivenessService {
  async evaluate(_frame: CameraFrame, challenge: LivenessChallenge): Promise<LivenessResult> {
    return { passed: false, challenge, confidence: 0 };
  }
}