import type { SVGProps } from 'react';

export function PianoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M5 12h14" />
      <path d="M8 7v5" />
      <path d'M6 7v5' />
      <path d'M11 7v5' />
      <path d'M13 7v5' />
      <path d'M16 7v5' />
      <path d'M18 7v5' />
    </svg>
  );
}

export function GuitarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <path d="M9 9c0-1.1.9-2 2-2s2 .9 2 2" />
      <path d="m9 18 2.5-2.5" />
      <path d="M9 5l12-2" />
      <path d="M21 16c0 1.1-.9 2-2 2s-2-.9-2-2" />
      <path d'M3 21a2 2 0 0 0 2 0l1-1a2 2 0 0 0 0-3l-1-1a2 2 0 0 0-3 0l-1 1a2 2 0 0 0 0 3Z' />
    </svg>
  );
}

export function DrumsIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="17" r="4" />
        <path d="M12 13V8" />
        <path d="m8 17-5.18-1.55a1 1 0 0 1-.32-1.42L5.4 10" />
        <path d="m16 17 5.18-1.55a1 1 0 0 0 .32-1.42L18.6 10" />
        <path d="M2 12c0-3.31 1.34-6 3-6" />
        <path d="M22 12c0-3.31-1.34-6-3-6" />
        <path d="m5 6 1.5 2" />
        <path d="m19 6-1.5 2" />
      </svg>
    );
  }
  
export function ViolinIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <path d="M9 9c0-1.1.9-2 2-2s2 .9 2 2" />
        <path d="m9 18 2.5-2.5" />
        <path d="M9 5l12-2" />
        <path d="M21 16c0 1.1-.9 2-2 2s-2-.9-2-2" />
        <path d="M3 21c-1.7 0-3-1.3-3-3 0-2 3-3.5 3-5s-3-1.5-3-3.5c0-1.7 1.3-3 3-3" />
        <path d="m20 14-3-3" />
      </svg>
    );
}

export function FluteIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 5L4 21" />
        <path d="m11 8-2 2" />
        <path d="m14 5-2 2" />
        <path d="m17 2-2 2" />
        <path d="m6 13-2 2" />
        <path d="m9 10-2 2" />
        <path d="m12 7-2 2" />
      </svg>
    );
}

export function VocalIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" x2="12" y1="19" y2="23" />
      </svg>
    );
}

export function KeyboardIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M11 12h2" />
            <path d="M12 11v2" />
            <path d="M5 12h.01" />
            <path d="M19 12h.01" />
            <path d="M8 12h.01" />
            <path d="M16 12h.01" />
        </svg>
    );
}
