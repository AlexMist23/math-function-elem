"use client";

import { cn } from "@/lib/utils";
import { Button } from "../../ui/button";
import { useState } from "react";
import DropHeader from "./drop-header";

export default function Header({ className }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className={className}>
        <div className="flex">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={cn("h-6 w-6 transition-transform", {
                "transform rotate-180": isMenuOpen,
              })}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
      {isMenuOpen && <DropHeader className="md:hidden" />}
    </>
  );
}
