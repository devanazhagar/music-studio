"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Music, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { NAV_LINKS } from '@/lib/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { BookTrialModal } from './book-trial-modal';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-foreground hover:bg-accent">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full max-w-sm">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b pb-4">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <Music className="h-7 w-7 text-primary" />
                <span className="font-headline text-xl font-bold">
                  Harmony Hub
                </span>
              </Link>
              <SheetClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-6 w-6" />
                </Button>
              </SheetClose>
            </div>
            <nav className="mt-8 flex flex-1 flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === link.href ? "text-primary" : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 border-t pt-4">
                <BookTrialModal>
                    <Button className="w-full" onClick={() => setIsOpen(false)}>Book Trial</Button>
                </BookTrialModal>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
