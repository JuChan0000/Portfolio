export default function LinkButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-xl border px-3 py-1.5 text-sm font-medium transition hover:-translate-y-0.5 hover:shadow w-fit"
    >
      {children}
    </a>
  );
}
