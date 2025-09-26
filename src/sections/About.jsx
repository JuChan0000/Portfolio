import Section from "../components/Section";
import Card from "../components/Card";
import LinkButton from "../components/LinkButton";
import { skills } from "../data/skills";

const Chip = ({ label }) => (
  <span className="rounded-full border px-3 py-1 text-sm">{label}</span>
);

export default function About() {
  return (
    <Section id="about" title="About">
      <Card>
        <h3 className="text-xl font-semibold">진주찬 · Frontend Developer</h3>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
          전남대 소프트웨어공학 전공. React와 Tailwind로 UI를 설계하고, 백엔드와의 안정적인 연동 및 상태 관리를 중시합니다.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((s) => <Chip key={s} label={s} />)}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href="#">이력서(Resume).pdf</LinkButton>
          <LinkButton href="https://github.com/">GitHub</LinkButton>
          <LinkButton href="https://inexpensive-station-335.notion.site/27a59d391b7c80d39679ee27a4b1d116?source=copy_link">Notion / Blog</LinkButton>
        </div>
      </Card>
    </Section>
  );
}
