import { motion } from "framer-motion";

export default function Card({ children, className = "" }) {
  return (
    <motion.div
      className={
        "w-full break-keep rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur-sm text-left transition hover:shadow-md dark:bg-neutral-900/70 " +className
      }
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
