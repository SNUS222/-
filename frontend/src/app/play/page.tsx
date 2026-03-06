export default function PlayPage() {
  return (
    <main className="mx-auto max-w-md p-6 pt-20">
      <div className="glass rounded-2xl p-6">
        <h1 className="text-2xl font-semibold">Подключение к игре</h1>
        <input className="mt-4 w-full rounded-lg bg-white/5 p-3" placeholder="Код игры" />
        <input className="mt-3 w-full rounded-lg bg-white/5 p-3" placeholder="Ник" />
        <button className="mt-4 w-full rounded-lg bg-primaryGradient p-3 font-semibold">Join</button>
      </div>
    </main>
  );
}
