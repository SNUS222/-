export default function AuthPage() {
  return (
    <main className="mx-auto max-w-md p-6 pt-20">
      <div className="glass rounded-2xl p-6">
        <h1 className="text-2xl font-semibold">Вход / Регистрация</h1>
        <div className="mt-4 space-y-3">
          <input className="w-full rounded-lg bg-white/5 p-3" placeholder="Email" />
          <input className="w-full rounded-lg bg-white/5 p-3" placeholder="Password" type="password" />
          <button className="w-full rounded-lg bg-primaryGradient p-3 font-semibold">Продолжить</button>
          <button className="w-full rounded-lg border border-white/20 p-3">OAuth Google</button>
        </div>
      </div>
    </main>
  );
}
