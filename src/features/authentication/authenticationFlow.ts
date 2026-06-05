import type { CameraFrame } from '@/services/camera/cameraService';
import { FaceDetectionService } from '@/services/ml/faceDetectionService';
import { LivenessService, type LivenessChallenge } from '@/services/ml/livenessService';
import { RecognitionService } from '@/services/ml/recognitionService';

export interface AuthenticationDecision {
  verified: boolean;
  reason: string;
}

export class AuthenticationFlow {
  constructor(
    private readonly faceDetectionService: FaceDetectionService,
    private readonly livenessService: LivenessService,
    private readonly recognitionService: RecognitionService
  ) {}

  async authenticate(frame: CameraFrame, challenge: LivenessChallenge): Promise<AuthenticationDecision> {
    const face = await this.faceDetectionService.detectSingleFace(frame);
    if (!face) {
      return { verified: false, reason: 'No face detected' };
    }

    const liveness = await this.livenessService.evaluate(frame, challenge);
    if (!liveness.passed) {
      return { verified: false, reason: 'Liveness failed' };
    }

    await this.recognitionService.generateEmbedding(frame);
    return { verified: true, reason: 'Pending reference match' };
  }
}