import React from "react";
import Link from "next/link";
import "./Footer.css";

type Props = {
  title?: string;
  description?: string;
};

const Footer: React.FC<Props> = ({ title, description }) => {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-title text-lg font-semibold">{title || "Beatbox"}</p>
        {description && <p className="footer-description text-sm">{description}</p>}
      </div>
      <div className="footer-links flex gap-4 text-sm">
        <Link href="/community">
          Community
        </Link>
        <Link href="/build-and-code">
          Build &amp; Code
        </Link>
        <Link href="/contact">
          Contact
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
