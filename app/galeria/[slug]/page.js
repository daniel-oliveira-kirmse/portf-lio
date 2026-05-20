import { notFound } from "next/navigation";
import GalleryClient from "./gallery-client";
import { projectGalleries } from "@/data/project-galleries";

export function generateStaticParams() {
  return Object.keys(projectGalleries).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const gallery = projectGalleries[slug];

  if (!gallery) {
    return {
      title: "Galeria | Projeto não encontrado",
    };
  }

  return {
    title: `${gallery.title} | Galeria`,
    description: gallery.summary,
  };
}

export default async function ProjectGalleryPage({ params }) {
  const { slug } = await params;
  const gallery = projectGalleries[slug];

  if (!gallery) {
    notFound();
  }

  return <GalleryClient gallery={gallery} />;
}
