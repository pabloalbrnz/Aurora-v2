import React from "react";
import "./style.css";

interface ICardProps {
  children: React.ReactNode;
  dynamicClass: string;
}

export function Card({ children, dynamicClass }: ICardProps) {
  return <div className={` card ${dynamicClass}`}>{children}</div>;
}
