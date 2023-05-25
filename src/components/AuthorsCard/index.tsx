import { Code, GithubLogo, Moon } from "@phosphor-icons/react";

import "./style.css";

export interface IAuthorsCardProps {}

export function AuthorsCard() {
  return (
    <div className="author-wrapper">
      <div className="pulse-author-wrapper">
        <span className="author-title">pulse</span>
        <div className="author-icons">
          <Moon weight="fill" className="author-icon" />
          <a
            href="https://github.com/pabloalbrnz"
            target="_blank"
            className="author-link"
          >
            <GithubLogo weight="bold" />
          </a>
        </div>
      </div>
      <div className="paulo-author-wrapper">
        <span className="author-title">Paulo</span>
        <div className="author-icons">
          <Code weight="bold" className="author-icon" />
          <a
            href="https://github.com/Paulo-Augusto12"
            target="_blank"
            className="author-link"
          >
            <GithubLogo weight="bold" />
          </a>
        </div>
      </div>
    </div>
  );
}
