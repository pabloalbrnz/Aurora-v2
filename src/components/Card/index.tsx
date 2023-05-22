import React from "react";

import "./style.css";

interface ICardProps {
  children: React.ReactNode;
  cardTitle: string;
  dynamicClass: string;
  variant: "sm" | "md" | "lg" | "hmd" | "hlg" | "vmd" | "vlg";
}

enum sizes {
  sm = "sm",
  md = "md",
  lg = "lg",
  hmd = "hmd",
  hlg = "hlg",
  vmd = "vmd",
  vlg = "vlg",
}

export function Card({
  children,
  cardTitle,
  dynamicClass,
  variant,
}: ICardProps) {
  return (
    <div
      className={`card ${dynamicClass} ${
        variant === sizes.sm && "card-sm"
          ? "card-sm"
          : variant === sizes.md && "card-md"
          ? "card-md"
          : variant === sizes.lg && "card-lg"
          ? "card-lg"
          : variant === sizes.hmd && "card-hmd"
          ? "card-hmd"
          : variant === sizes.hlg && "card-hlg"
          ? "card-hlg"
          : variant === sizes.vmd && "card-vmd"
          ? "card-vmd"
          : variant === sizes.vlg && "card-vlg"
          ? "card-vlg"
          : null
      }`}
    >
      <span className="card-title">{cardTitle}</span>
      <div className="card-wrapper">{children}</div>
    </div>
  );
}
