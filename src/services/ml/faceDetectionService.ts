import type { FaceBoundingBox } from '@/types/face';
import type { CameraFrame } from '@/services/camera/cameraService';

export class FaceDetectionService {
  async detectSingleFace(_frame: CameraFrame): Promise<FaceBoundingBox | null> {
    return null;
  }
}