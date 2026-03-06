export default function CreateTestPage() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-3xl font-semibold">Create Test</h1>
      <div className="glass mt-6 rounded-2xl p-6">
        <p className="mb-4 text-white/70">Drag & Drop редактор (MVP scaffold).</p>
        <input className="mb-3 w-full rounded-lg bg-white/5 p-3" placeholder="Название теста" />
        <textarea className="h-32 w-full rounded-lg bg-white/5 p-3" placeholder="Добавьте вопрос..." />
      </div>
    </main>
  );
}
