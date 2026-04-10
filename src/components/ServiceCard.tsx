"use client";

import Image from "next/image";
import type { HomeCard } from "@/types/content";

type ServiceCardProps = {
  card: HomeCard;
  onActivate: () => void;
};

export function ServiceCard({ card, onActivate }: ServiceCardProps) {
  return (
    <article
      className="homeCard"
      onClick={onActivate}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onActivate();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="homeCardImgWrapper">
        <Image
          src={card.icon}
          alt={card.imageAlt}
          fill
          className="homeCardImg"
          sizes="(max-width: 768px) 150px, 150px"
        />
      </div>
      <h3 className="homeCardTitle">{card.title}</h3>
      <p className="homeCardBody">{card.content}</p>
      <span className="click-info">Click for more info</span>
    </article>
  );
}
