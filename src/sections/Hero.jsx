import { motion } from "framer-motion";
const kakaoPayYellow = "#FEE500";
export default function Hero() {
  return (
    <header className="relative isolate flex min-h-[72vh] items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: `radial-gradient(60% 60% at 50% 20%, ${kakaoPayYellow}33 0%, transparent 60%)` }} />
      <motion.div className="mx-auto max-w-5xl px-4 text-center" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs font-medium backdrop-blur dark:bg-neutral-900/70">
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: kakaoPayYellow }} />
          Frontend Portfolio
        </div>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
          사용자 경험을 고민하는 <span className="underline decoration-4" style={{ textDecorationColor: kakaoPayYellow }}>FE 개발자</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-600 dark:text-neutral-300">React · Tailwind · 인터랙션 · 성능 최적화에 관심이 많습니다.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#projects" className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5">프로젝트 보러가기</a>
         </div>
      </motion.div>
    </header>
  );
}