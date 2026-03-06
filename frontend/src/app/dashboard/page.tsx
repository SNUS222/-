import { StatCard } from '@/components/StatCard';

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="mb-6 text-3xl font-semibold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard title="Активные тесты" value="18" />
        <StatCard title="Игроков онлайн" value="2,402" />
        <StatCard title="Средний score" value="78%" />
        <StatCard title="Турниров" value="6" />
      </div>
    </main>
  );
}
