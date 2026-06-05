export interface FaceBoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface FaceEmbedding {
  vector: number[];
  dimension: 512;
}

export interface FaceSample {
  id: string;
  employeeId: string;
  embedding: FaceEmbedding;
  createdAt: string;
}