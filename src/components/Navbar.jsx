import { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#problem", label: "Problem Solving" },
  ];
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur dark:bg-neutral-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="font-bold">진주찬 · FE</a>
        <button className="inline-flex h-9 w-9 items-center justify-center rounded-xl border sm:hidden" onClick={() => setOpen(!open)}>≡</button>
        <div className="hidden gap-6 sm:flex">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium hover:opacity-80">{n.label}</a>
          ))}
        </div>
      </div>
      {open && (
        <div className="sm:hidden">
          <div className="mx-auto max-w-6xl px-4 pb-4">
            <div className="grid gap-2">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="rounded-xl border px-3 py-2 text-sm" onClick={() => setOpen(false)}>{n.label}</a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}