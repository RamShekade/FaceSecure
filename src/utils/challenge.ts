import type { LivenessChallenge } from '@/services/ml/livenessService';

export function formatChallenge(challenge: LivenessChallenge): string {
  switch (challenge) {
    case 'blink':
      return 'Blink now';
    case 'head-turn':
      return 'Turn your head';
    case 'smile':
      return 'Smile';
  }
}