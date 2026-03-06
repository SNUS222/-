export default function ResultsPage() {
  return (
    <main className="mx-auto max-w-4xl p-6 pt-16">
      <h1 className="text-3xl font-semibold">Results</h1>
      <div className="glass mt-6 rounded-2xl p-6">
        <p>Correct answers: 84%</p>
        <p className="mt-2">Average response time: 3.2s</p>
        <button className="mt-4 rounded-lg bg-primaryGradient px-4 py-2">Export CSV</button>
      </div>
    </main>
  );
}
