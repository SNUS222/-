import Link from 'next/link';
import { NavBar } from '@/components/NavBar';
import { AnimatedLeaderboard } from '@/components/AnimatedLeaderboard';

export default function LandingPage() {
  return (
    <main>
      <NavBar />
      <section className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-2">
        <div>
          <span className="glass rounded-full px-4 py-1 text-xs">Better than Kahoot: faster UX + deeper analytics</span>
          <h1 className="mt-6 text-5xl font-bold leading-tight">Запускайте живые викторины, тесты и турниры в один клик</h1>
          <p className="mt-4 text-white/75">Онбординг за 30 секунд, smooth интерфейс, real-time лидерборд и детальная статистика обучения.</p>
          <div className="mt-8 flex gap-3">
            <Link href="/auth" className="rounded-xl bg-primaryGradient px-6 py-3 font-semibold">Начать бесплатно</Link>
            <Link href="/play" className="glass rounded-xl px-6 py-3">Демо тест</Link>
          </div>
        </div>
        <div className="glass rounded-3xl p-6">
          <h3 className="mb-4 text-xl font-semibold">Live Leaderboard</h3>
          <AnimatedLeaderboard />
        </div>
      </section>
    </main>
  );
}
