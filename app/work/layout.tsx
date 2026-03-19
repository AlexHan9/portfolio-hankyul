export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-6">
      <a href="/" className="text-sm underline text-accent">← Back to overview</a>
      <div className="mt-4 card">{children}</div>
    </section>
  );
}
