import Link from "next/link";
import { Music, MapPin, Phone, Mail } from "lucide-react";
import { NAV_LINKS, INSTRUMENTS, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const quickLinks = NAV_LINKS.slice(0, 5);

  return (
    <footer className="bg-primary/5 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Music className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold text-foreground">
                Harmony Hub
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Nurturing musical talent in Chennai for over a decade. Join us to start your musical journey.
            </p>
            <div className="flex space-x-4">
                {SOCIAL_LINKS.map((link) => (
                    <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <link.icon className="h-5 w-5" />
                        <span className="sr-only">{link.name}</span>
                    </a>
                ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold text-lg mb-4">Instruments</h3>
            <ul className="space-y-2">
              {INSTRUMENTS.map((instrument) => (
                <li key={instrument.name}>
                  <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {instrument.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-primary shrink-0" />
                <span className="text-muted-foreground">123 Music Street, T. Nagar, Chennai - 600017</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 text-primary shrink-0" />
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-1 text-primary shrink-0" />
                <a href="mailto:info@harmonymusicacademy.com" className="text-muted-foreground hover:text-primary transition-colors">info@harmonymusicacademy.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Harmony Music Academy. All Rights Reserved.</p>
          <p className="mt-1">Website by <a href="#" className="hover:text-primary transition-colors font-medium">Firebase Studio</a></p>
        </div>
      </div>
    </footer>
  );
}
