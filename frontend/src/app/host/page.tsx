export default function HostPage() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-3xl font-semibold">Host Controls</h1>
      <div className="glass mt-6 grid gap-4 rounded-2xl p-6 md:grid-cols-3">
        <button className="rounded-lg bg-primaryGradient p-3 font-semibold">Start Quiz</button>
        <button className="rounded-lg border border-white/20 p-3">Next Question</button>
        <button className="rounded-lg border border-red-400/50 p-3 text-red-200">Stop Session</button>
      </div>
    </main>
  );
}
