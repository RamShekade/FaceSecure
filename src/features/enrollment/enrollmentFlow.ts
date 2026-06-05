import type { CameraFrame } from '@/services/camera/cameraService';
import { runMlPipeline } from '@/services/ml/mlPipeline';
import { RecognitionService } from '@/services/ml/recognitionService';

export interface EnrollmentResult {
  employeeId: string;
  samplesCollected: number;
  embeddingsGenerated: number;
}

export class EnrollmentFlow {
  constructor(private readonly recognitionService: RecognitionService) {}

  async enroll(employeeId: string, frames: CameraFrame[]): Promise<EnrollmentResult> {
    for (const frame of frames) {
      runMlPipeline(frame);
      await this.recognitionService.generateEmbedding(frame);
    }

    return {
      employeeId,
      samplesCollected: frames.length,
      embeddingsGenerated: frames.length
    };
  }
}