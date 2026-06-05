import type { CameraFrame } from '@/services/camera/cameraService';
import { alignFace, applyAutoWhiteBalance, applyClahe, normalizeInput } from './imageProcessing';

export interface MlPipelineResult {
  normalized: Float32Array;
}

export function runMlPipeline(frame: CameraFrame): MlPipelineResult {
  const aligned = alignFace({ width: frame.width, height: frame.height, pixels: frame.data });
  const balanced = applyAutoWhiteBalance(aligned);
  const enhanced = applyClahe(balanced);
  return { normalized: normalizeInput(enhanced) };
}