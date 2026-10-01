import { Button } from "../components/Button";
import { PageMeta } from "../lib/meta";

export default function NotFound() {
  PageMeta("Page Not Found");
  return (
    <section className="blueprint-grid flex min-h-[100svh] flex-col items-center justify-center bg-ink-950 px-6 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="display-1 mt-8 text-[clamp(4rem,12vw,9rem)] text-bone-50/90">404</h1>
      <p className="mt-2 font-serif text-xl italic text-mist/70">This page hasn’t been built yet.</p>
      <div className="mt-10">
        <Button to="/" variant="outline">Return Home</Button>
      </div>
    </section>
  );
}
