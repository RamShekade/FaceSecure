import type { CameraFrame } from '@/services/camera/cameraService';
import type { FaceEmbedding } from '@/types/face';

export interface VerificationResult {
  matched: boolean;
  score: number;
  threshold: number;
}

export class RecognitionService {
  async generateEmbedding(_frame: CameraFrame): Promise<FaceEmbedding> {
    return { vector: Array.from({ length: 512 }, () => 0), dimension: 512 };
  }

  compareEmbeddings(candidate: FaceEmbedding, reference: FaceEmbedding, threshold = 0.75): VerificationResult {
    const score = cosineSimilarity(candidate.vector, reference.vector);
    return { matched: score >= threshold, score, threshold };
  }
}

function cosineSimilarity(left: number[], right: number[]): number {
  const length = Math.min(left.length, right.length);
  let dot = 0;
  let leftMagnitude = 0;
  let rightMagnitude = 0;

  for (let index = 0; index < length; index += 1) {
    dot += left[index] * right[index];
    leftMagnitude += left[index] * left[index];
    rightMagnitude += right[index] * right[index];
  }

  if (!leftMagnitude || !rightMagnitude) {
    return 0;
  }

  return dot / (Math.sqrt(leftMagnitude) * Math.sqrt(rightMagnitude));
}