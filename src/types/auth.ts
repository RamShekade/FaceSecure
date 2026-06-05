export type AuthenticationStatus = 'idle' | 'enrolling' | 'livenessChecking' | 'matching' | 'verified' | 'rejected';

export interface ChallengeResponse {
  challengeId: string;
  challengeType: 'blink' | 'head-turn' | 'smile';
  expectedWindowMs: number;
}