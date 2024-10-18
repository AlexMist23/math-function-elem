"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/nav-links";

export default function DropHeader({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        className,
        "border-t-2 p-2 fixed mt-[270px] flex flex-col bg-background backdrop-blur border-b shadow-sm w-full -ml-4 gap-1"
      )}
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-foreground p-3 mx-3 rounded-md",
            pathname === link.href ? "bg-muted" : "hover:bg-muted"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
