import React from "react";

import "./style.css";

interface ICardProps {
  children: React.ReactNode;
  cardTitle: string;
  dynamicClass?: string;
  variant: "sm" | "md" | "lg" | "hmd" | "hlg" | "vmd" | "vlg";
}

enum sizes {
  sm = "sm",
  md = "md",
  lg = "lg",
  hmd = 'hmd',
  hlg = 'hlg',
  vmd = 'vmd',
  vlg = 'vlg',
}

export function Card({ children, cardTitle, dynamicClass, variant }: ICardProps) {
  return (
    <div className={`card ${dynamicClass} ${"teste"}`}>
      <span className="card-title">{cardTitle}</span>
      <div className="card-wrapper">{children}</div>
    </div>
  );
}
