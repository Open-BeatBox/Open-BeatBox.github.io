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
        <p className="text-lg font-semibold text-white">{title || "Beatbox"}</p>
        {description && <p className="text-sm text-slate-300">{description}</p>}
      </div>
      <div className="flex gap-4 text-sm text-slate-200">
        <Link href="/community" className="hover:text-white">
          Community
        </Link>
        <Link href="/build-and-code" className="hover:text-white">
          Build &amp; Code
        </Link>
        <Link href="/contact" className="hover:text-white">
          Contact
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
