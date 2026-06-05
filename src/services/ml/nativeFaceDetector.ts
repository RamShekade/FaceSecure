import { NativeModules } from 'react-native';

import type { FaceBoundingBox } from '../../types/face';

type FaceDetectorNativeModule = {
  detectFace(imagePath: string): Promise<FaceBoundingBox[]>;
};

const nativeFaceDetector = NativeModules.FaceDetector as
  | FaceDetectorNativeModule
  | undefined;

export const detectFace = async (
  imagePath: string
): Promise<FaceBoundingBox[]> => {
  if (!nativeFaceDetector) {
    throw new Error('FaceDetector native module is not available');
  }

  return nativeFaceDetector.detectFace(imagePath);
};