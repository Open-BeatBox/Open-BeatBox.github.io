import React from "react";
import "./Footer.css";

type Props = {
  title?: string;
  description?: string;
};

const Footer: React.FC<Props> = ({ title, description }) => {
  return (
    <footer className="site-footer">
      <div className="footer-row flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="footer-title text-lg font-semibold">{title || "Beatbox"}</p>
          {description && <p className="footer-description text-sm">{description}</p>}
        </div>
        <div className="footer-links flex gap-4 text-sm">
          <a href="https://open-beatbox.github.io/docs/manual/">Documentation</a>
          <a href="https://open-beatbox.github.io/docs/beatbox-assembly-tutorial.html">Build your Own</a>
          <a href="https://github.com/Open-BeatBox/Open-BeatBox.github.io/tree/main/resources/software">GUI</a>
          <a href="https://github.com/Open-BeatBox/Open-BeatBox.github.io">Github</a>
        </div>
      </div>
      <p className="footer-credits">
        Made with ♥ by{" "}
        <a href="https://neuronautix.com" target="_blank" rel="noopener noreferrer">NeuroNautix</a>
        {" | "}
        <a href="https://dhuzard.github.io" target="_blank" rel="noopener noreferrer">Damien Huzard</a>
      </p>
    </footer>
  );
};

export default Footer;
