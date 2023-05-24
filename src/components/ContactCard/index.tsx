import {
  DiscordLogo,
  EnvelopeSimple,
  InstagramLogo,
  LinkedinLogo,
  Moon,
} from "@phosphor-icons/react";

import "./style.css";

export interface IContactCardProps {}

export function ContactCard({}: IContactCardProps) {
  return (
    <div className="contact-wrapper">
      <a
        // href=""
        // target="_blank"
        className="contact-link"
      >
        <Moon weight="bold" />
        <span className="contact-title">pulse</span>
      </a>
      <a
        href="pabloalbernazrincon@gmail.com"
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
        href="https://linkedin.com/in/pabloalbrnz"
        target="_blank"
        className="contact-link"
      >
        <LinkedinLogo weight="bold" />
        <span className="contact-title">LinkedIn</span>
      </a>
    </div>
  );
}
