"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Chevron({ direction = "left" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5" aria-hidden="true">
      {direction === "left" ? <path strokeWidth="2" d="m15 18-6-6 6-6" /> : <path strokeWidth="2" d="m9 18 6-6-6-6" />}
    </svg>
  );
}

function StageCarousel({ stage }) {
  const [index, setIndex] = useState(0);
  const activeItem = stage.items[index];

  const previous = () => {
    setIndex((current) => (current - 1 + stage.items.length) % stage.items.length);
  };

  const next = () => {
    setIndex((current) => (current + 1) % stage.items.length);
  };

  return (
    <section className="mb-12">
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">{stage.title}</p>
          <h2 className="mt-2 font-display text-[3rem] uppercase leading-[0.9] tracking-[-0.04em] md:text-[4.5rem]">
            {stage.title}
          </h2>
          <p className="mt-3 max-w-3xl font-mono text-[1rem] leading-[1.55] text-muted md:text-[1.1rem]">
            {stage.description}
          </p>
        </div>
        <div className="font-mono text-sm uppercase tracking-[0.14em] text-white/65">
          {index + 1} / {stage.items.length}
        </div>
      </div>

      <div className="surface-card overflow-hidden border border-accent/15">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative flex min-h-[320px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(235,70,4,0.22),transparent_60%)] p-4 md:min-h-[520px] md:p-8">
            {activeItem.type === "video" ? (
              <video
                key={activeItem.src}
                controls
                preload="metadata"
                className="max-h-[460px] w-full rounded-lg object-contain"
              >
                <source src={activeItem.src} type="video/mp4" />
              </video>
            ) : (
              <div className="relative h-[280px] w-full md:h-[460px]">
                <Image key={activeItem.src} src={activeItem.src} alt={activeItem.alt} fill className="object-contain" />
              </div>
            )}
          </div>

          <div className="flex flex-col justify-between gap-6 p-6 md:p-8">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">
                {activeItem.type === "video" ? "Registro em vídeo" : "Registro fotográfico"}
              </p>
              <p className="mt-4 font-display text-[2.3rem] uppercase leading-none md:text-[3rem]">
                {stage.title}
              </p>
              <p className="mt-4 font-mono text-[1rem] leading-[1.6] text-muted md:text-[1.1rem]">
                Sequência visual da etapa de {stage.title.toLowerCase()}, mostrando a evolução do protótipo em contexto
                real de construção e validação.
              </p>
            </div>

            <div>
              <div className="mb-5 flex gap-3">
                <button
                  onClick={previous}
                  aria-label={`Anterior em ${stage.title}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/20 bg-secondary text-accent transition hover:-translate-y-1 hover:bg-accent hover:text-white"
                >
                  <Chevron direction="left" />
                </button>
                <button
                  onClick={next}
                  aria-label={`Próximo em ${stage.title}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/20 bg-secondary text-accent transition hover:-translate-y-1 hover:bg-accent hover:text-white"
                >
                  <Chevron direction="right" />
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {stage.items.map((item, itemIndex) => (
                  <button
                    key={`${item.src}-${itemIndex}`}
                    onClick={() => setIndex(itemIndex)}
                    className={`rounded-full border px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] transition ${
                      itemIndex === index
                        ? "border-accent bg-accent text-white"
                        : "border-white/10 bg-transparent text-white/70 hover:border-accent hover:text-accent"
                    }`}
                  >
                    {item.type === "video" ? `Video ${itemIndex + 1}` : `Foto ${itemIndex + 1}`}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FocusShowcase({ sections }) {
  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">Telas do Produto</p>
          <h2 className="mt-3 font-display text-[3.5rem] uppercase leading-[0.9] tracking-[-0.04em] md:text-[5rem]">
            UI / UX do App
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {sections.map((section, index) => (
            <article
              key={section.id}
              className="surface-card overflow-hidden border border-accent/15"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative min-h-[320px] bg-[radial-gradient(circle_at_center,rgba(235,70,4,0.18),transparent_60%)] p-6 md:min-h-[480px] md:p-8">
                  <Image src={section.media.src} alt={section.media.alt} fill className="object-contain p-6 md:p-10" />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-10">
                  <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">{section.label}</p>
                  <h3 className="mt-3 font-display text-[2.7rem] uppercase leading-[0.9] tracking-[-0.04em] md:text-[4rem]">
                    {section.title}
                  </h3>
                  <p className="mt-5 font-mono text-[1rem] leading-[1.6] text-muted md:text-[1.12rem]">
                    {section.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function GalleryClient({ gallery }) {
  return (
    <main className="min-h-screen bg-background text-white">
      <section className="relative overflow-hidden border-b border-accent/10 px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-32">
        <div className="pointer-events-none absolute right-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/#projetos"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-sm uppercase tracking-[0.08em] text-white transition hover:border-accent hover:text-accent"
            >
              <span aria-hidden="true">←</span>
              Voltar aos projetos
            </Link>
            <div className="flex flex-wrap gap-2">
              {gallery.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-accent/20 bg-secondary px-3 py-1 font-mono text-xs uppercase tracking-[0.1em] text-muted"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.22em] text-accent">{gallery.eyebrow}</p>
              <h1 className="mt-4 font-display text-[4rem] uppercase leading-[0.9] tracking-[-0.04em] md:text-[6rem] lg:text-[9rem]">
                {gallery.title}
              </h1>
              <p className="mt-5 max-w-2xl font-mono text-[1.1rem] leading-[1.5] text-muted md:text-[1.35rem]">
                {gallery.summary}
              </p>
            </div>

            <div className="surface-card relative overflow-hidden border border-accent/15 p-6 md:p-8">
              <div className="absolute right-0 top-0 h-28 w-28 bg-accent" />
              <p className="relative z-10 font-display text-[2rem] uppercase text-background md:text-[2.5rem]">
                {gallery.accent}
              </p>
              <div className="relative z-10 mt-6 border-t border-white/10 pt-6">
                <p className="font-mono text-sm uppercase tracking-[0.14em] text-white/70">Estrutura Visual</p>
                <p className="mt-2 font-mono text-[1rem] leading-[1.5] text-muted md:text-[1.15rem]">
                  Cada projeto agora tem uma linguagem própria de apresentação, mas preservando a mesma atmosfera
                  brutalista e o ritmo visual do portfólio principal.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 surface-card overflow-hidden border border-accent/15">
            <div className="relative flex min-h-[280px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(235,70,4,0.24),transparent_60%)] p-8 md:min-h-[420px]">
              <Image
                src={gallery.heroImage}
                alt={gallery.heroAlt}
                width={1200}
                height={900}
                className="h-auto max-h-[360px] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {gallery.mode === "showcase" ? <FocusShowcase sections={gallery.sections} /> : null}

      {gallery.mode === "timeline-carousels" ? (
        <section className="px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1400px]">
            {gallery.stages.map((stage) => (
              <StageCarousel key={stage.id} stage={stage} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
