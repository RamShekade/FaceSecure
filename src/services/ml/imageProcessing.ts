export interface ImageProcessingInput {
  width: number;
  height: number;
  pixels: Uint8Array;
}

export function applyClahe(input: ImageProcessingInput): ImageProcessingInput {
  return input;
}

export function applyAutoWhiteBalance(input: ImageProcessingInput): ImageProcessingInput {
  return input;
}

export function normalizeInput(input: ImageProcessingInput): Float32Array {
  return new Float32Array(input.pixels.length);
}

export function alignFace(input: ImageProcessingInput): ImageProcessingInput {
  return input;
}