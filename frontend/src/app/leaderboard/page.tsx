import { AnimatedLeaderboard } from '@/components/AnimatedLeaderboard';

export default function LeaderboardPage() {
  return (
    <main className="mx-auto max-w-xl p-6 pt-16">
      <h1 className="mb-6 text-3xl font-semibold">Leaderboard</h1>
      <AnimatedLeaderboard />
    </main>
  );
}
