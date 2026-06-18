'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { NavigationItem } from "@/types/content";
import "./Header.css";

type Props = {
  items: NavigationItem[];
  logo?: string;
  title?: string;
};

const Header: React.FC<Props> = ({ logo }) => {
  return (
    <header className="site-header">
      <Link href="/" className="brand-link">
        {logo ? (
          <Image src={logo} alt="BEATBox logo" width={40} height={40} priority />
        ) : (
          <div className="h-10 w-10 rounded-full bg-blue-500" />
        )}
        <span className="brand-title text-xl font-semibold">BEATBox</span>
      </Link>
      <div className="header-actions">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
