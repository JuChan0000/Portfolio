import Card from "./Card";
import LinkButton from "./LinkButton";

export default function ProjectCard({ p }) {
  return (
    <Card>
      <h3 className="text-lg font-semibold">{p.title}</h3>
      <p className="mt-1 text-sm text-neutral-500">{p.period}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {p.stack.map((t) => (
          <span
            key={t}
            className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs dark:bg-neutral-800"
          >
            {t}
          </span>
        ))}
      </div>

      <p className="mt-3 text-neutral-700 dark:text-neutral-300">{p.summary}</p>

      <ul className="mt-3 list-disc pl-5 text-left text-neutral-700 dark:text-neutral-300">
        {p.highlights?.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-3">
        {p.links?.demo && <LinkButton href={p.links.demo}>Demo</LinkButton>}
        {p.links?.repo && <LinkButton href={p.links.repo}>Repository</LinkButton>}
        {p.links?.doc && <LinkButton href={p.links.doc}>Docs</LinkButton>}
      </div>
    </Card>
  );
}
