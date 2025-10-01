"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Fragment } from 'react';
import { ChevronRight } from 'lucide-react';
import { AnimatedWrapper } from './animated-wrapper';

type PageHeaderProps = {
  title: string;
  description: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <section className="bg-primary/5 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <AnimatedWrapper>
            <div className="text-center">
            <div className="mb-4 flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                {pathSegments.map((segment, index) => (
                <Fragment key={segment}>
                    <ChevronRight className="h-4 w-4" />
                    <Link
                        href={`/${pathSegments.slice(0, index + 1).join('/')}`}
                        className={`capitalize ${index === pathSegments.length - 1 ? 'text-foreground font-semibold' : 'hover:text-primary transition-colors'}`}
                    >
                        {segment.replace(/-/g, ' ')}
                    </Link>
                </Fragment>
                ))}
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
                {title}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                {description}
            </p>
            </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
