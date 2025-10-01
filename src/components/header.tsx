"use client";

import Link from "next/link";
import { Music, Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { MobileNav } from "./mobile-nav";
import { BookTrialModal } from "./book-trial-modal";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent",
        "bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Music className="h-7 w-7 text-primary" />
            <span className="font-headline text-xl font-bold text-foreground">
              Harmony Hub
            </span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="hidden lg:block text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              +91 98765 43210
            </a>
            <div className="hidden md:block">
              <BookTrialModal>
                <Button>Book Trial</Button>
              </BookTrialModal>
            </div>
            <MobileNav />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
