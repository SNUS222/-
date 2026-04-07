export default function GamePage() {
  return (
    <main className="mx-auto max-w-3xl p-6 pt-16">
      <div className="glass rounded-2xl p-6">
        <p className="text-sm text-white/70">Вопрос 3/12 · 00:14</p>
        <h1 className="mt-2 text-2xl font-semibold">Какая из этих технологий используется для real-time?</h1>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {['REST only', 'Socket.io', 'CSV export', 'Cron'].map((a) => (
            <button key={a} className="rounded-xl bg-white/5 p-4 text-left transition hover:bg-white/15">{a}</button>
          ))}
        </div>
      </div>
    </main>
  );
}
