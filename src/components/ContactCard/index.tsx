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
      <div className="pulse-contact-wrapper">
        <a
          // href=""
          // target="_blank"
          className="contact-link"
        >
          <span className="contact-title">pulse</span>
          <Moon weight="fill" className="contact-icon" />
        </a>
        <a
          href="mailto:pabloalbernazrincon@gmail.com"
          target="_blank"
          className="contact-link"
        >
          <span className="contact-title">Email</span>
          <EnvelopeSimple weight="bold" />
        </a>
        <a
          href="https://discord.com/invite/ErJHvmG99p"
          target="_blank"
          className="contact-link"
        >
          <span className="contact-title">Discord</span>
          <DiscordLogo weight="bold" />
        </a>
        <a
          href="https://instagram.com/pabloalbrnz"
          target="_blank"
          className="contact-link"
        >
          <span className="contact-title">Instagram</span>
          <InstagramLogo weight="bold" />
        </a>
        <a
          href="https://linkedin.com/in/pabloalbrnz/"
          target="_blank"
          className="contact-link"
        >
          <span className="contact-title">LinkedIn</span>
          <LinkedinLogo weight="bold" />
        </a>
      </div>
      <div className="paulo-contact-wrapper">
        <a
          // href=""
          // target="_blank"
          className="contact-link"
        >
          <span className="contact-title">Paulo</span>
          <Code weight="bold" className="contact-icon" />
        </a>
        <a
          href="mailto:paulo.augusto.ribeiro12@gmail.com"
          target="_blank"
          className="contact-link"
        >
          <span className="contact-title">Email</span>
          <EnvelopeSimple weight="bold" />
        </a>
        <a
          href="https://discord.com/invite/ErJHvmG99p"
          target="_blank"
          className="contact-link"
        >
          <span className="contact-title">Discord</span>
          <DiscordLogo weight="bold" />
        </a>
        <a
          href="https://instagram.com/paulu3248"
          target="_blank"
          className="contact-link"
        >
          <span className="contact-title">Instagram</span>
          <InstagramLogo weight="bold" />
        </a>
        <a
          href="https://linkedin.com/in/paulo-augusto-ribeiro-62730a237/"
          target="_blank"
          className="contact-link"
        >
          <span className="contact-title">LinkedIn</span>
          <LinkedinLogo weight="bold" />
        </a>
      </div>
    </div>
  );
}
