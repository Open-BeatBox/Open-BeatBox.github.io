'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";
import { MenuIcon, CloseIcon } from "@/lib/icons";
import { NavigationItem } from "@/types/content";
import "./Header.css";

type Props = {
  items: NavigationItem[];
  logo?: string;
  title?: string;
};

const Header: React.FC<Props> = ({ items, logo, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2 text-white">
          {logo ? (
            <Image src={logo} alt="Beatbox logo" width={36} height={36} priority />
          ) : (
            <div className="h-9 w-9 rounded-full bg-blue-500" />
          )}
          <span className="text-lg font-semibold">{title || "Beatbox"}</span>
        </Link>
      </div>
      <div className="md:hidden">
        <button
          aria-label="Toggle menu"
          className="menu-btn"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      <div className="hidden md:block">
        <Navigation items={items} />
      </div>
      {open && (
        <div className="mobile-nav">
          <Navigation items={items} onNavigate={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
