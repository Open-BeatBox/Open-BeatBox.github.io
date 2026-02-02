import React from "react";
import Link from "next/link";
import { NavigationItem } from "@/types/content";

type Props = {
  items: NavigationItem[];
  onNavigate?: () => void;
};

const Navigation: React.FC<Props> = ({ items, onNavigate }) => {
  return (
    <nav className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-white/80 transition hover:text-white"
          onClick={onNavigate}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
