import { motion } from "framer-motion";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-20">
      <motion.h2
        className="mb-8 text-2xl font-semibold sm:text-3xl"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );
}
