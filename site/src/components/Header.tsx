'use client';

import React from "react";
import ThemeToggle from "./ThemeToggle";
import { NavigationItem } from "@/types/content";
import "./Header.css";

type Props = {
  items: NavigationItem[];
  logo?: string;
  title?: string;
};

const Header: React.FC<Props> = () => {
  return (
    <header className="site-header" aria-label="Display settings">
      <ThemeToggle />
    </header>
  );
};

export default Header;
