import {
  Banknote,
  CalendarCheck,
  Facebook,
  Instagram,
  ThumbsUp,
  User,
  Youtube,
  CreditCard,
  Landmark,
} from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';
import type {
  NavLink,
  TrustBadge,
  Instrument,
  WhyChooseUsItem,
  Testimonial,
  Course,
  Teacher,
  ScheduleSlot,
  Fee,
  GalleryPhoto,
  GalleryVideo,
  Achievement,
  Event,
} from './types';
import { GuitarIcon, PianoIcon, DrumsIcon, ViolinIcon, FluteIcon, VocalIcon, KeyboardIcon } from '@/components/icons';

const findImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    // Return a fallback or throw an error
    return { id: 'fallback', imageUrl: 'https://picsum.photos/seed/fallback/400/400', imageHint: 'fallback', description: 'Fallback image' };
  }
  return image;
};

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
  { href: '/teachers', label: 'Teachers' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
  { href: '/ai-advisor', label: 'AI Advisor' },
];

export const TRUST_BADGES: TrustBadge[] = [
  { value: '500+', label: 'Happy Students' },
  { value: '15+', label: 'Expert Teachers' },
  { value: '10+', label: 'Years of Experience' },
];

export const INSTRUMENTS: Instrument[] = [
  { name: 'Piano', icon: PianoIcon },
  { name: 'Guitar', icon: GuitarIcon },
  { name: 'Drums', icon: DrumsIcon },
  { name: 'Violin', icon: ViolinIcon },
  { name: 'Flute', icon: FluteIcon },
  { name: 'Keyboard', icon: KeyboardIcon },
  { name: 'Vocal', icon: VocalIcon },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: 'One-on-One Teaching',
    description: 'Personalized attention from expert instructors to accelerate your learning.',
    icon: User,
  },
  {
    title: 'Flexible Timings',
    description: 'We offer a wide range of slots to fit your busy schedule.',
    icon: CalendarCheck,
  },
  {
    title: 'Grade Exam Preparation',
    description: 'Structured curriculum to help you excel in ABRSM, Trinity, and other grade exams.',
    icon: ThumbsUp,
  },
  {
    title: 'Monthly Recitals',
    description: 'Opportunities to perform and showcase your talent in front of an audience.',
    icon: ThumbsUp,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Priya Sharma',
    text: 'My daughter learned piano here and passed Grade 5 with distinction! The teachers are patient and highly skilled. We are so grateful to Harmony Hub.',
    image: findImage('testimonial-1'),
  },
  {
    name: 'Arjun Mehta',
    text: 'As a working professional, the flexible timings were a huge plus. I could finally learn guitar after work. Highly recommended for adults!',
    image: findImage('testimonial-2'),
  },
  {
    name: 'Lakshmi Iyer',
    text: 'Best music teachers in Chennai! The atmosphere is so encouraging and positive. My son loves his drum classes and has improved so much in a short time.',
    image: findImage('testimonial-3'),
  },
];

export const COURSES: Course[] = [
  {
    instrument: 'Piano',
    image: findImage('piano-course'),
    ageGroups: ['Kids (5-12)', 'Teens (13-18)', 'Adults (18+)'],
    levels: [
      {
        name: 'Beginner',
        price: 3000,
        duration: '3 months, 24 sessions',
        frequency: '2 classes/week, 1 hour each',
        learns: ['Basic scales and chords', 'Reading sheet music', 'Simple song playing'],
        timings: ['Morning', 'Evening', 'Weekend'],
      },
      {
        name: 'Intermediate',
        price: 4000,
        duration: '3 months, 24 sessions',
        frequency: '2 classes/week, 1 hour each',
        learns: ['Advanced techniques', 'Music theory', 'Complex pieces'],
        timings: ['Morning', 'Evening', 'Weekend'],
      },
      {
        name: 'Advanced',
        price: 5000,
        duration: '3 months, 24 sessions',
        frequency: '2 classes/week, 1 hour each',
        learns: ['Improvisation and composition', 'Performance preparation', 'Genre specialization'],
        timings: ['Morning', 'Evening'],
      },
    ],
  },
  {
    instrument: 'Guitar',
    image: findImage('guitar-course'),
    ageGroups: ['Teens (13-18)', 'Adults (18+)'],
    levels: [
      {
        name: 'Beginner',
        price: 3000,
        duration: '3 months, 24 sessions',
        frequency: '2 classes/week, 1 hour each',
        learns: ['Basic chords and strumming', 'Tuning the guitar', 'Playing popular songs'],
        timings: ['Morning', 'Evening', 'Weekend'],
      },
      {
        name: 'Intermediate',
        price: 4000,
        duration: '3 months, 24 sessions',
        frequency: '2 classes/week, 1 hour each',
        learns: ['Barre chords and fingerpicking', 'Introduction to solos', 'Music theory for guitar'],
        timings: ['Evening', 'Weekend'],
      },
      {
        name: 'Advanced',
        price: 5000,
        duration: '3 months, 24 sessions',
        frequency: '2 classes/week, 1 hour each',
        learns: ['Advanced soloing techniques', 'Genre exploration (Blues, Rock)', 'Songwriting'],
        timings: ['Evening'],
      },
    ],
  },
  {
    instrument: 'Drums',
    image: findImage('drums-course'),
    ageGroups: ['Kids (5-12)', 'Teens (13-18)', 'Adults (18+)'],
    levels: [
      {
        name: 'Beginner',
        price: 3000,
        duration: '3 months, 24 sessions',
        frequency: '2 classes/week, 1 hour each',
        learns: ['Basic grooves and fills', 'Reading drum notation', 'Coordination exercises'],
        timings: ['Morning', 'Evening', 'Weekend'],
      },
      {
        name: 'Intermediate',
        price: 4000,
        duration: '3 months, 24 sessions',
        frequency: '2 classes/week, 1 hour each',
        learns: ['Advanced rhythms', 'Playing with a metronome', 'Different music styles'],
        timings: ['Evening', 'Weekend'],
      },
      {
        name: 'Advanced',
        price: 5000,
        duration: '3 months, 24 sessions',
        frequency: '2 classes/week, 1 hour each',
        learns: ['Polyrhythms and odd time signatures', 'Studio drumming techniques', 'Improvisation'],
        timings: ['Evening'],
      },
    ],
  },
  {
    instrument: 'Violin',
    image: findImage('violin-course'),
    ageGroups: ['Kids (5-12)', 'Teens (13-18)'],
    levels: [
      {
        name: 'Beginner',
        price: 3000,
        duration: '3 months, 24 sessions',
        frequency: '2 classes/week, 1 hour each',
        learns: ['Proper posture and bowing', 'Basic notes and scales', 'Simple melodies'],
        timings: ['Morning', 'Weekend'],
      },
      {
        name: 'Intermediate',
        price: 4000,
        duration: '3 months, 24 sessions',
        frequency: '2 classes/week, 1 hour each',
        learns: ['Vibrato and shifting', 'Playing in different positions', 'Ensemble playing'],
        timings: ['Evening', 'Weekend'],
      },
      {
        name: 'Advanced',
        price: 5000,
        duration: '3 months, 24 sessions',
        frequency: '2 classes/week, 1 hour each',
        learns: ['Advanced bowing techniques', 'Classical concertos', 'Performance skills'],
        timings: ['Evening'],
      },
    ],
  },
    {
    instrument: 'Flute',
    image: findImage('flute-course'),
    ageGroups: ['Kids (5-12)', 'Teens (13-18)', 'Adults (18+)'],
    levels: [
      {
        name: 'Beginner',
        price: 3000,
        duration: '3 months, 24 sessions',
        frequency: '2 classes/week, 1 hour each',
        learns: ['Proper embouchure and tone production', 'Basic scales and fingerings', 'Playing simple tunes'],
        timings: ['Morning', 'Evening', 'Weekend'],
      },
      {
        name: 'Intermediate',
        price: 4000,
        duration: '3 months, 24 sessions',
        frequency: '2 classes/week, 1 hour each',
        learns: ['Articulation techniques', 'Reading advanced music', 'Introduction to classical pieces'],
        timings: ['Evening', 'Weekend'],
      },
      {
        name: 'Advanced',
        price: 5000,
        duration: '3 months, 24 sessions',
        frequency: '2 classes/week, 1 hour each',
        learns: ['Extended techniques', 'Orchestral excerpts', 'Solo performance mastery'],
        timings: ['Evening'],
      },
    ],
  },
  {
    instrument: 'Vocal',
    image: findImage('vocal-course'),
    ageGroups: ['Kids (5-12)', 'Teens (13-18)', 'Adults (18+)'],
    levels: [
      {
        name: 'Beginner',
        price: 3000,
        duration: '3 months, 24 sessions',
        frequency: '2 classes/week, 1 hour each',
        learns: ['Breathing techniques and posture', 'Pitch control and ear training', 'Singing simple songs'],
        timings: ['Morning', 'Evening', 'Weekend'],
      },
      {
        name: 'Intermediate',
        price: 4000,
        duration: '3 months, 24 sessions',
        frequency: '2 classes/week, 1 hour each',
        learns: ['Expanding vocal range', 'Voice modulation and dynamics', 'Harmonizing'],
        timings: ['Evening', 'Weekend'],
      },
      {
        name: 'Advanced',
        price: 5000,
        duration: '3 months, 24 sessions',
        frequency: '2 classes/week, 1 hour each',
        learns: ['Advanced vocal techniques (belting, falsetto)', 'Stage performance skills', 'Genre specialization (Pop, Classical)'],
        timings: ['Evening'],
      },
    ],
  },
];

export const TEACHERS: Teacher[] = [
  { name: 'Ramesh Kumar', instrument: 'Piano', qualifications: 'MA Music, Grade 8 ABRSM', experience: '10+ years', specialization: 'Classical, Jazz, Contemporary', bio: 'A passionate educator dedicated to fostering a love for music in every student.', image: findImage('teacher-1') },
  { name: 'Anjali Rao', instrument: 'Guitar', qualifications: 'Grade 8 Trinity, B.Mus', experience: '8+ years', specialization: 'Acoustic, Electric, Blues', bio: 'Specializes in making learning guitar fun and accessible for all ages.', image: findImage('teacher-2') },
  { name: 'Vikram Singh', instrument: 'Drums', qualifications: 'Professional Drummer', experience: '15+ years', specialization: 'Rock, Funk, Fusion', bio: 'An experienced performer bringing real-world drumming skills to the classroom.', image: findImage('teacher-3') },
  { name: 'Sunita Patel', instrument: 'Vocal', qualifications: 'M.A. in Vocal Music', experience: '12+ years', specialization: 'Hindustani Classical, Pop', bio: 'A versatile vocal coach with a focus on healthy singing techniques.', image: findImage('teacher-4') },
  { name: 'David Chen', instrument: 'Violin', qualifications: 'Grade 8 ABRSM', experience: '7+ years', specialization: 'Western Classical, Suzuki Method', bio: 'Expert in teaching young children using engaging and effective methods.', image: findImage('teacher-5') },
  { name: 'Meera Desai', instrument: 'Vocal & Keyboard', qualifications: 'Sangeet Visharad', experience: '9+ years', specialization: 'Light Music, Bollywood, Bhajans', bio: 'Helps students find their unique voice and express themselves through music.', image: findImage('teacher-6') },
];

export const SCHEDULE_DATA: ScheduleSlot[] = [
    { time: '09:00 AM - 10:00 AM', Monday: 'Piano (Available)', Tuesday: '', Wednesday: 'Guitar (Limited)', Thursday: '', Friday: 'Piano (Full)', Saturday: 'Vocal (Available)', Sunday: '' },
    { time: '10:00 AM - 11:00 AM', Monday: 'Guitar (Available)', Tuesday: 'Violin (Available)', Wednesday: 'Drums (Available)', Thursday: 'Vocal (Limited)', Friday: 'Guitar (Available)', Saturday: 'Piano (Full)', Sunday: 'Drums (Available)' },
    { time: '11:00 AM - 12:00 PM', Monday: 'Vocal (Available)', Tuesday: 'Piano (Limited)', Wednesday: 'Flute (Available)', Thursday: 'Drums (Available)', Friday: 'Violin (Available)', Saturday: 'Guitar (Limited)', Sunday: 'Piano (Available)' },
    { time: '12:00 PM - 01:00 PM', Monday: '', Tuesday: '', Wednesday: '', Thursday: '', Friday: '', Saturday: '', Sunday: '' },
    { time: '04:00 PM - 05:00 PM', Monday: 'Drums (Full)', Tuesday: 'Piano (Available)', Wednesday: 'Guitar (Full)', Thursday: 'Vocal (Available)', Friday: 'Drums (Limited)', Saturday: 'Violin (Available)', Sunday: '' },
    { time: '05:00 PM - 06:00 PM', Monday: 'Violin (Available)', Tuesday: 'Guitar (Limited)', Wednesday: 'Piano (Available)', Thursday: 'Flute (Available)', Friday: 'Vocal (Full)', Saturday: 'Guitar (Available)', Sunday: 'Drums (Limited)' },
    { time: '06:00 PM - 07:00 PM', Monday: 'Piano (Limited)', Tuesday: 'Drums (Full)', Wednesday: 'Vocal (Available)', Thursday: 'Guitar (Available)', Friday: 'Piano (Available)', Saturday: 'Flute (Available)', Sunday: 'Vocal (Available)' },
    { time: '07:00 PM - 08:00 PM', Monday: 'Guitar (Available)', Tuesday: 'Vocal (Limited)', Wednesday: 'Piano (Full)', Thursday: 'Drums (Available)', Friday: 'Guitar (Limited)', Saturday: 'Piano (Available)', Sunday: '' },
];
  
export const INSTRUMENT_COLORS: { [key: string]: string } = {
  Piano: 'bg-purple-200 text-purple-800 border-purple-400',
  Guitar: 'bg-blue-200 text-blue-800 border-blue-400',
  Drums: 'bg-red-200 text-red-800 border-red-400',
  Violin: 'bg-yellow-200 text-yellow-800 border-yellow-400',
  Flute: 'bg-green-200 text-green-800 border-green-400',
  Vocal: 'bg-pink-200 text-pink-800 border-pink-400',
};

export const FEE_STRUCTURE: Fee[] = [
  { plan: 'Monthly Plan', price: 3000 },
  { plan: 'Quarterly Plan', price: 8100, discount: '10% Off' },
  { plan: 'Yearly Plan', price: 28800, discount: '20% Off' },
];

export const PAYMENT_METHODS = [
    { name: 'Credit/Debit Card', icon: CreditCard },
    { name: 'UPI', icon: Banknote },
    { name: 'Net Banking', icon: Landmark },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  { id: '1', category: 'Classes', image: findImage('gallery-photo-1') },
  { id: '2', category: 'Classes', image: findImage('gallery-photo-2') },
  { id: '3', category: 'Performances', image: findImage('gallery-photo-3') },
  { id: '4', category: 'Events', image: findImage('gallery-photo-4') },
  { id: '5', category: 'Classes', image: findImage('gallery-photo-5') },
  { id: '6', category: 'Performances', image: findImage('gallery-photo-6') },
  { id: '7', category: 'Competitions', image: findImage('gallery-photo-7') },
  { id: '8', category: 'Events', image: findImage('gallery-photo-8') },
  { id: '9', category: 'Classes', image: findImage('gallery-photo-9') },
  { id: '10', category: 'Competitions', image: findImage('gallery-photo-10') },
  { id: '11', category: 'Events', image: findImage('gallery-photo-11') },
  { id: '12', category: 'Performances', image: findImage('gallery-photo-12') },
];

export const GALLERY_VIDEOS: GalleryVideo[] = [
  { id: '1', title: 'Annual Day Performance 2023', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: '2', title: 'Student Piano Recital', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: '3', title: 'Rock Band Showcase', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: '4', title: 'Violin Solo by a Star Student', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: '5', title: 'Vocal Group Harmony', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: '6', title: 'Drum Solo Compilation', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: '1', title: 'Ananya, Grade 8 Piano', description: 'Passed with Distinction from Trinity College London.', image: findImage('achievement-1') },
  { id: '2', title: 'Rohan, Battle of Bands Winner', description: 'Lead guitarist of the winning band at the city-level competition.', image: findImage('achievement-2') },
  { id: '3', title: 'Kids Choir, 1st Prize', description: 'Won first prize at the Inter-School Choral Competition.', image: findImage('achievement-3') },
];

export const EVENTS: Event[] = [
  {
    name: 'Annual Music Showcase 2024',
    date: 'August 15, 2024',
    time: '6:00 PM',
    location: 'Sir Mutha Venkatasubba Rao Concert Hall',
    description: 'Our biggest event of the year, featuring performances from our most talented students and teachers.',
    image: findImage('event-1'),
    isUpcoming: true,
  },
  {
    name: 'Guitar Workshop with Alex Mercy',
    date: 'July 25, 2024',
    time: '11:00 AM - 2:00 PM',
    location: 'Harmony Hub Auditorium',
    description: 'An exclusive workshop on advanced fingerstyle techniques by renowned guitarist Alex Mercy.',
    image: findImage('event-2'),
    isUpcoming: true,
  },
  {
    name: 'Parent-Teacher Music Meet',
    date: 'July 10, 2024',
    time: '4:00 PM - 6:00 PM',
    location: 'Harmony Hub Campus',
    description: 'An open house for parents to discuss student progress and future musical journeys with our instructors.',
    image: findImage('event-3'),
    isUpcoming: true,
  },
  { name: 'Spring Recital 2024', date: '', time: '', location: '', description: '', image: findImage('past-event-1'), isUpcoming: false },
  { name: 'Christmas Concert 2023', date: '', time: '', location: '', description: '', image: findImage('past-event-2'), isUpcoming: false },
  { name: 'Diwali Music Fest 2023', date: '', time: '', location: '', description: '', image: findImage('past-event-3'), isUpcoming: false },
  { name: 'Summer Jam Session 2023', date: '', time: '', location: '', description: '', image: findImage('past-event-4'), isUpcoming: false },
  { name: 'Violin & Piano Duet Night', date: '', time: '', location: '', description: '', image: findImage('past-event-5'), isUpcoming: false },
  { name: 'Student Band Showcase', date: '', time: '', location: '', description: '', image: findImage('past-event-6'), isUpcoming: false },
];

export const SOCIAL_LINKS = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
];

export const UPCOMING_EVENTS_TICKER = [
    "Annual Music Showcase on August 15th!",
    "Guitar Workshop with Alex Mercy on July 25th!",
    "New Weekend Batches for Piano starting soon!",
    "Enroll now for Grade Exam preparation!",
];
