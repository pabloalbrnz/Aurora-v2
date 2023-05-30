import "./style.css";

import { BehanceLogo, DribbbleLogo, YoutubeLogo } from "@phosphor-icons/react";

interface IUtilLinksCard {}
export function UtilLinksCard() {
  return (
    <div className="util-links-wrapper">
      <div className="util-links-buttons">
        <a className="util-links-button" href="https://youtube.com/">
          <YoutubeLogo weight="fill" />
        </a>
        <a className="util-links-button" href="https://behance.net/">
          <BehanceLogo weight="bold" />
        </a>
        <a className="util-links-button" href="https://dribbble.net/">
          <DribbbleLogo weight="bold" />
        </a>
      </div>
    </div>
  );
}
