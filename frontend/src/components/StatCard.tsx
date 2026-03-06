export function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-5">
      <p className="text-sm text-white/70">{title}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
    </div>
  );
}
