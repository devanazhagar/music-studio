import type { ImagePlaceholder } from './placeholder-images';

export type NavLink = {
  href: string;
  label: string;
};

export type TrustBadge = {
  value: string;
  label: string;
};

export type Instrument = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type WhyChooseUsItem = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type Testimonial = {
  name: string;
  text: string;
  image: ImagePlaceholder;
};

export type CourseLevel = {
  name: string;
  price: number;
  duration: string;
  frequency: string;
  learns: string[];
  timings: string[];
};

export type Course = {
  instrument: string;
  image: ImagePlaceholder;
  ageGroups: string[];
  levels: CourseLevel[];
};

export type Teacher = {
  name: string;
  instrument: string;
  qualifications: string;
  experience: string;
  specialization: string;
  bio: string;
  image: ImagePlaceholder;
};

export type ScheduleSlot = {
  time: string;
  [day: string]: string | undefined; // e.g., Monday: "Piano (Available)"
};

export type Fee = {
  plan: string;
  price: number;
  discount?: string;
};

export type GalleryPhoto = {
  id: string;
  category: string;
  image: ImagePlaceholder;
};

export type GalleryVideo = {
  id: string;
  title: string;
  embedUrl: string;
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
  image: ImagePlaceholder;
};

export type Event = {
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: ImagePlaceholder;
  isUpcoming: boolean;
};
