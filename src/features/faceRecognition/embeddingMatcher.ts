import type { FaceEmbedding } from '@/types/face';

export function compareEmbeddings(left: FaceEmbedding, right: FaceEmbedding): number {
  const length = Math.min(left.vector.length, right.vector.length);
  let dot = 0;
  let leftMagnitude = 0;
  let rightMagnitude = 0;

  for (let index = 0; index < length; index += 1) {
    dot += left.vector[index] * right.vector[index];
    leftMagnitude += left.vector[index] * left.vector[index];
    rightMagnitude += right.vector[index] * right.vector[index];
  }

  if (!leftMagnitude || !rightMagnitude) {
    return 0;
  }

  return dot / (Math.sqrt(leftMagnitude) * Math.sqrt(rightMagnitude));
}