import { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { IMG } from "@/lib/images";
import { ALUMNI_VIDEOS, SITE, VIDEOS } from "@/lib/site-data";

function VideoCard({
  id,
  title,
  meta,
  thumb,
  index,
}: {
  id: string;
  title: string;
  meta: string;
  thumb: string;
  index: number;
}) {
  const [playing, setPlaying] = useState(false);
  return (
    <Reveal delay={index * 100} className="group">
      <div className="relative aspect-video overflow-hidden bg-navy-deep">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
            title={`${title} – ${meta}`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button onClick={() => setPlaying(true)} className="absolute inset-0 text-left" aria-label={`Play ${title} – ${meta}`}>
            <img
              src={thumb}
              alt=""
              className="h-full w-full object-cover transition-transform duration-1000 [transition-timing-function:cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105"
              loading="lazy"
            />
            <span className="absolute inset-0 bg-navy-deep/20 transition-colors group-hover:bg-navy-deep/10" />
            <span className="absolute bottom-4 left-4 grid h-14 w-14 place-items-center bg-primary text-primary-foreground transition-transform duration-500 group-hover:scale-110">
              <Play className="ml-0.5 h-5 w-5 fill-current" />
            </span>
          </button>
        )}
      </div>
      <div className="flex items-start justify-between gap-4 border-b border-border py-4">
        <div>
          <p className="font-display text-xl font-semibold">{title}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">{meta}</p>
        </div>
        <span className="text-xs font-bold text-muted-foreground/60">0{index + 1}</span>
      </div>
    </Reveal>
  );
}

export function Videos() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow eyebrow-line">Watch</p>
            <h2 className="display mt-5 text-5xl sm:text-6xl">SLPS Video Gallery</h2>
          </div>
          <a href={SITE.youtube} target="_blank" rel="noreferrer" className="btn btn-outline">
            SLPS Youtube Channel <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {VIDEOS.map((v, i) => (
            <VideoCard key={v.id} {...v} thumb={IMG.videos[i]!} index={i} />
          ))}
        </div>

        <Reveal className="mt-20 flex flex-wrap items-end justify-between gap-6 md:mt-28">
          <div>
            <p className="eyebrow eyebrow-line">Alumni</p>
            <h2 className="display mt-5 text-4xl sm:text-5xl">
              SLPS <span className="display-italic text-primary">Alumni</span> Series
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Former students on where Silverline took them — in their own words.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {ALUMNI_VIDEOS.map((v, i) => (
            <VideoCard key={v.id} {...v} thumb={IMG.alumni[i]!} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
