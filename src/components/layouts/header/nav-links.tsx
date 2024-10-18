"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/nav-links";

export default function NavLinks({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav className={className}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "",
            pathname === link.href
              ? "text-foreground"
              : "text-foreground/50 hover:text-foreground"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
