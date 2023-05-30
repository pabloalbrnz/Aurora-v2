import "./style.css";

interface IMiniCardProps {
  children: React.ReactNode;
  cardTitle: string;
  dynamicClass: string;
  variant: "sm" | "md" | "lg";
}

enum sizes {
  sm = "sm",
  md = "md",
  lg = "lg",
}

export function MiniCard({
  children,
  cardTitle,
  dynamicClass,
  variant,
}: IMiniCardProps) {
  return (
    <div
      className={`minicard ${dynamicClass} ${
        variant === sizes.sm && "minicard-sm"
          ? "minicard-sm"
          : variant === sizes.md && "minicard-md"
          ? "minicard-md"
          : variant === sizes.lg && "minicard-lg"
          ? "minicard-lg"
          : null
      }`}
    >
      <span className="minicard-title">{cardTitle}</span>
      <div className={`minicard-wrapper minicard-${variant}`}>{children}</div>
    </div>
  );
}
