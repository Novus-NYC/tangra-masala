import {
  ImageBand,
  MenuGrid,
  PageIntro,
  SiteFooter,
  SiteHeader,
} from "../components";
import { images } from "../content";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <SiteHeader />
      <PageIntro
        eyebrow="Menu"
        image={images.friedRice}
        title="Tangra masala, Manchurian, Hakka, chilli, and more."
        text="The complete shared Tangra menu, including classics from both Queens dining rooms. Please call before visiting for current availability."
      />
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal reveal-up mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-red">Complete Shared Menu</p>
              <h2 className="mt-4 font-serif text-4xl font-black uppercase leading-tight sm:text-5xl">
                The full Tangra table.
              </h2>
            </div>
          </div>
          <MenuGrid />
        </div>
      </section>
      <ImageBand />
      <SiteFooter />
    </main>
  );
}
