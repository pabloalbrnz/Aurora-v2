import React from "react";

import "./style.css";

interface ICardProps {
  children: React.ReactNode;
  cardTitle: string;
}

export function Card({ children, cardTitle }: ICardProps) {
  return (
    <div className="card">
      <span className="card-title">{cardTitle}</span>
      <div className="card-wrapper">{children}</div>
    </div>
  );
}
