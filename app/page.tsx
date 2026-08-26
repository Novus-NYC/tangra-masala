import Link from "next/link";

import {
  ImageBand,
  LocationCards,
  MenuGrid,
  SiteFooter,
  SiteHeader,
} from "./components";
import { images } from "./content";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader />

      <section
        className="hero-shell hero-photo-shell"
        style={{ backgroundImage: `url(${images.hero})` }}
      >
        <div className="hero-content-grid">
          <div className="hero-center scroll-reveal reveal-up is-visible">
            <p className="eyebrow hero-kicker">Indo-Chinese in Elmhurst</p>
            <h1 className="hero-title">
              Grand Avenue<br />
              wok heat.
            </h1>
            <p className="hero-copy">
              Halal meat, Hakka noodles, Manchurian sauce, crisp starters, and
              Tangra masala plates made for the middle of the table.
            </p>
            <div className="hero-actions">
              <a className="button button-electric" href="/menu">
                View Menu <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-outline-light" href="/locations">
                Visit Elmhurst
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-rise intro-section bg-cream px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.58fr_1.42fr] lg:items-start">
          <div className="scroll-reveal reveal-left section-heading">
            <p className="eyebrow text-red">The Tangra code</p>
            <h2 className="mt-4 font-serif text-4xl font-black uppercase leading-tight sm:text-5xl">
              Heat. Crunch.<br />&amp; repeat.
            </h2>
          </div>
          <div className="scroll-reveal reveal-right grid gap-6 lg:grid-cols-[1fr_0.72fr]">
            <p className="text-lg leading-8 text-ink/72">
              Tangra Masala keeps the focus on the original Grand Avenue
              experience: no-fuss Queens dining, generous shared plates, and
              Chinese-Indian flavors shaped by Kolkata's Tangra neighborhood.
              Build the table around dry-or-gravy sauces, spicy soups, noodles,
              fried rice, and crisp starters.
            </p>
            <div className="order-note p-6">
              <p className="eyebrow text-forest-dark">Order like a regular</p>
              <p className="mt-4 text-base font-bold leading-7 text-ink/70">
                Start crisp, add soup, split rice or noodles, then choose dry
                or gravy for the main plates.
              </p>
              <Link className="button button-dark mt-6" href="/story">
                Our story <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-rise kitchen-board px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.74fr_1.26fr]">
          <div className="scroll-reveal reveal-left">
            <p className="eyebrow text-red">Menu preview</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl font-black uppercase leading-tight sm:text-5xl">
              Wok-fired, spicy, and built for Elmhurst regulars.
            </h2>
            <figure className="menu-strip mt-8">
              <img alt="Tangra-style chilli chicken" src={images.chilliChicken} />
            </figure>
            <Link className="button button-dark mt-8" href="/menu">
              Full Menu
            </Link>
          </div>
          <div className="mt-2 lg:mt-16">
            <MenuGrid compact />
          </div>
        </div>
      </section>

      <ImageBand />

      <section className="split-scroll grid bg-forest/30 text-ink lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex items-center px-5 py-20 sm:px-8 lg:px-16">
          <div className="scroll-reveal reveal-right">
            <p className="eyebrow text-red">Halal meat</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl font-black uppercase leading-tight sm:text-5xl">
              Familiar comfort, finished with Tangra heat.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/70">
              Order the table around contrast: crispy chicken and pakora,
              peppery soups, fragrant fried rice, Hakka noodles, seafood, goat,
              tofu, paneer, and the house masala sauces that tie it together.
            </p>
          </div>
        </div>
        <div
          className="image-pan min-h-[28rem] bg-cover bg-center"
          style={{ backgroundImage: `url(${images.friedRice})` }}
        />
      </section>

      <section className="section-rise px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal reveal-up flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-red">Visit</p>
              <h2 className="mt-4 font-serif text-4xl font-black uppercase leading-tight sm:text-5xl">
                One Grand Avenue destination.
              </h2>
            </div>
            <Link className="button button-dark shrink-0" href="/locations">
              Hours & Directions
            </Link>
          </div>
          <div className="mt-12">
            <LocationCards compact />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
