import type { LivenessChallenge } from '@/services/ml/livenessService';

export const LIVENESS_CHALLENGES: LivenessChallenge[] = ['blink', 'head-turn', 'smile'];

export function pickRandomChallenge(seed = 0): LivenessChallenge {
  return LIVENESS_CHALLENGES[seed % LIVENESS_CHALLENGES.length];
}