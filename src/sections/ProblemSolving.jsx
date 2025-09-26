import { useMemo } from "react";
import Section from "../components/Section";
import Card from "../components/Card";

export default function ProblemSolving() {
  const items = useMemo(() => [
    { title: "성능 최적화 – 리스트 렌더", body: "IntersectionObserver 지연 로딩 + react-window로 초기 로드 35% 단축." },
    { title: "네트워크/UX – 오류 복구", body: "지수 백오프 재시도, 사용자 토스트 알림, 실패 시 Sentry 로깅." },
    
  ], []);

  return (
    <Section id="problem" title="Problem Solving & 성장">
      <div className="grid gap-6 sm:grid-cols-3">
        {items.map((it, i) => (
          <Card key={i} className="w-full">
            <h4 className="text-base font-semibold">{it.title}</h4>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{it.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
