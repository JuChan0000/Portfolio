import Section from "../components/Section";
import Card from "../components/Card";
import { kakaoPayYellow } from "../theme/colors";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <Card>
        <form
          className="grid gap-4 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            alert("메일 전송 훅(Formspree 등)을 연결하세요");
          }}
        >
          <div className="grid gap-1">
            <label htmlFor="name" className="text-sm font-medium">이름</label>
            <input id="name" className="rounded-xl border px-3 py-2 outline-none focus:ring" placeholder="홍길동" />
          </div>
          <div className="grid gap-1">
            <label htmlFor="email" className="text-sm font-medium">이메일</label>
            <input id="email" type="email" className="rounded-xl border px-3 py-2 outline-none focus:ring" placeholder="you@example.com" />
          </div>
          <div className="sm:col-span-2 grid gap-1">
            <label htmlFor="msg" className="text-sm font-medium">메시지</label>
            <textarea id="msg" rows={4} className="rounded-xl border px-3 py-2 outline-none focus:ring" placeholder="안녕하세요!" />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="w-full rounded-xl px-4 py-2 font-semibold text-black" style={{ background: kakaoPayYellow }}>
              보내기
            </button>
          </div>
        </form>
      </Card>
    </Section>
  );
}
