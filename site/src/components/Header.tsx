'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";
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
        <Link href="/" className="brand-link">
          {logo ? (
            <Image src={logo} alt="Beatbox logo" width={36} height={36} priority />
          ) : (
            <div className="h-9 w-9 rounded-full bg-blue-500" />
          )}
          <span className="brand-title text-lg font-semibold">{title || "Beatbox"}</span>
        </Link>
      </div>
      <div className="header-actions">
        <div className="hidden md:block">
          <Navigation items={items} />
        </div>
        <ThemeToggle />
        <button
          aria-label="Toggle menu"
          className="menu-btn md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
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
