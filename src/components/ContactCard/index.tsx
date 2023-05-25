import {
  Code,
  DiscordLogo,
  EnvelopeSimple,
  InstagramLogo,
  LinkedinLogo,
  Moon,
} from "@phosphor-icons/react";

import "./style.css";

export interface IContactCardProps {}

export function ContactCard() {
  return (
    <div className="contact-wrapper">
      <div className="pulse-wrapper">
        <a
          // href=""
          // target="_blank"
          className="contact-link"
        >
          <Moon weight="fill" className="contact-icon" />
          <span className="contact-title">pulse</span>
        </a>
        <a
          href="mailto:pabloalbernazrincon@gmail.com"
          target="_blank"
          className="contact-link"
        >
          <EnvelopeSimple weight="bold" />
          <span className="contact-title">Email</span>
        </a>
        <a
          href="https://discord.com/invite/ErJHvmG99p"
          target="_blank"
          className="contact-link"
        >
          <DiscordLogo weight="bold" />
          <span className="contact-title">Discord</span>
        </a>
        <a
          href="https://instagram.com/pabloalbrnz"
          target="_blank"
          className="contact-link"
        >
          <InstagramLogo weight="bold" />
          <span className="contact-title">Instagram</span>
        </a>
        <a
          href="https://linkedin.com/in/pabloalbrnz/"
          target="_blank"
          className="contact-link"
        >
          <LinkedinLogo weight="bold" />
          <span className="contact-title">LinkedIn</span>
        </a>
      </div>
      <div className="paulo-wrapper">
        <a
          // href=""
          // target="_blank"
          className="contact-link"
        >
          <Code weight="bold" className="contact-icon" />
          <span className="contact-title">Paulo</span>
        </a>
        <a
          href="mailto:paulo.augusto.ribeiro12@gmail.com"
          target="_blank"
          className="contact-link"
        >
          <EnvelopeSimple weight="bold" />
          <span className="contact-title">Email</span>
        </a>
        <a
          href="https://discord.com/invite/ErJHvmG99p"
          target="_blank"
          className="contact-link"
        >
          <DiscordLogo weight="bold" />
          <span className="contact-title">Discord</span>
        </a>
        <a
          href="https://instagram.com/paulu3248"
          target="_blank"
          className="contact-link"
        >
          <InstagramLogo weight="bold" />
          <span className="contact-title">Instagram</span>
        </a>
        <a
          href="https://linkedin.com/in/paulo-augusto-ribeiro-62730a237/"
          target="_blank"
          className="contact-link"
        >
          <LinkedinLogo weight="bold" />
          <span className="contact-title">LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
