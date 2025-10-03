"use client";

import Image from "next/image";
import Link from "next/link";
import {
  TRUST_BADGES,
  INSTRUMENTS,
  WHY_CHOOSE_US,
  TESTIMONIALS,
  UPCOMING_EVENTS_TICKER,
} from "@/lib/constants";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Music, PlayCircle, Star } from "lucide-react";
import { InstrumentIcon } from "@/components/instrument-icon";
import { BookTrialModal } from "@/components/book-trial-modal";
import { AnimatedWrapper } from "@/components/animated-wrapper";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const studentPerformanceImage = PlaceHolderImages.find((img) => img.id === 'student-performance')!;

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <UpcomingEventsTicker />
      <main className="space-y-24 md:space-y-32 my-16 md:my-24">
        <InstrumentsSection />
        <FeaturedPerformanceSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <QuickEnrollmentSection />
      </main>
    </>
  );
}

function AnimatedInstrumentBoxes() {
    const instruments = [...INSTRUMENTS, ...INSTRUMENTS]; // Duplicate for seamless loop
  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden relative mb-8">
      <div className="flex animate-scroll-loop">
        {instruments.map((instrument, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-24 h-24 mx-4 flex flex-col items-center justify-center bg-card rounded-xl shadow-md"
          >
            <InstrumentIcon instrument={instrument.name} className="w-10 h-10 text-primary" />
          </div>
        ))}
      </div>
       <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-16 pb-20 text-center md:pt-24 lg:pt-32">
        <div className="container mx-auto px-4">
            <AnimatedWrapper>
                <AnimatedInstrumentBoxes />
                <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
                    Learn Your Favorite Instrument
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
                    Piano, Guitar, Drums, Violin & More. Join Chennai's leading music academy and unleash your inner musician.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <BookTrialModal>
                        <Button size="lg" className="w-full sm:w-auto font-bold">Book Free Trial</Button>
                    </BookTrialModal>
                    <Button size="lg" variant="outline" asChild className="w-full sm:w-auto font-bold">
                        <Link href="/courses">View Courses</Link>
                    </Button>
                </div>
            </AnimatedWrapper>
            <AnimatedWrapper delay={0.2}>
                <div className="mt-12">
                    <div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden shadow-2xl">
                         <Image
                            src="/girl-pic.png"
                            alt="A woman wearing headphones listening to music."
                            data-ai-hint="woman headphones"
                            width={1280}
                            height={720}
                            priority
                            className="w-full"
                        />
                    </div>
                </div>
            </AnimatedWrapper>
             <AnimatedWrapper delay={0.4}>
                <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                    {TRUST_BADGES.map((badge, index) => (
                        <div key={index} className="flex items-center gap-3 text-muted-foreground">
                            <Check className="w-5 h-5 text-primary" />
                            <span className="font-semibold">{badge.value}</span>
                            <span>{badge.label}</span>
                        </div>
                    ))}
                </div>
            </AnimatedWrapper>
        </div>
    </section>
  );
}

function UpcomingEventsTicker() {
  const tickerContent = [...UPCOMING_EVENTS_TICKER, ...UPCOMING_EVENTS_TICKER];
  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
      <div className="flex whitespace-nowrap ticker-animation">
        {tickerContent.map((text, index) => (
          <div key={index} className="flex items-center mx-6">
            <Music className="w-4 h-4 mr-2" />
            <span className="font-semibold text-sm">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InstrumentsSection() {
  return (
    <section className="container mx-auto px-4">
      <AnimatedWrapper>
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">Instruments We Teach</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">From classical to contemporary, find the perfect instrument for you.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {INSTRUMENTS.map((instrument, index) => (
            <AnimatedWrapper key={instrument.name} delay={index * 0.05}>
              <Link href="/courses">
                <div className="group flex flex-col items-center justify-center gap-3 rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-lg">
                  <InstrumentIcon instrument={instrument.name} className="w-10 h-10 text-primary transition-colors group-hover:text-primary-foreground" />
                  <span className="font-semibold text-center">{instrument.name}</span>
                </div>
              </Link>
            </AnimatedWrapper>
          ))}
        </div>
      </AnimatedWrapper>
    </section>
  );
}

function FeaturedPerformanceSection() {
    return (
        <section className="bg-primary/5 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <AnimatedWrapper>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">Student Spotlight</h2>
                            <p className="mt-4 text-muted-foreground text-lg">Watch our talented students shine! Here's a glimpse of what you can achieve at Harmony Hub.</p>
                            <Button asChild size="lg" className="mt-8">
                                <Link href="/gallery">
                                    <PlayCircle className="mr-2 h-5 w-5" />
                                    Watch More Performances
                                </Link>
                            </Button>
                        </div>
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                            <Image
                                src={studentPerformanceImage.imageUrl}
                                alt={studentPerformanceImage.description}
                                data-ai-hint={studentPerformanceImage.imageHint}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <PlayCircle className="w-20 h-20 text-white/80 transition-all group-hover:text-white group-hover:scale-110" />
                            </div>
                        </div>
                    </div>
                </AnimatedWrapper>
            </div>
        </section>
    );
}

function WhyChooseUsSection() {
  return (
    <section className="container mx-auto px-4">
      <AnimatedWrapper>
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">Why Choose Harmony Hub?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">We provide a nurturing environment for musical growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <AnimatedWrapper key={item.title} delay={index * 0.1}>
              <Card className="h-full text-center">
                <CardHeader className="items-center">
                    <div className="bg-primary/10 p-4 rounded-full">
                        <item.icon className="w-8 h-8 text-primary" />
                    </div>
                  <CardTitle className="pt-4 font-headline">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </AnimatedWrapper>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedWrapper>
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">Words from Our Community</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">See what students and parents are saying about us.</p>
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 5000 })]}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {TESTIMONIALS.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col">
                      <CardContent className="pt-6 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex text-yellow-400 mb-2">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                          </div>
                          <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                        </div>
                        <div className="flex items-center mt-4">
                          <Avatar>
                            <AvatarImage src={testimonial.image.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.image.imageHint} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="ml-4">
                            <p className="font-semibold">{testimonial.name}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </AnimatedWrapper>
      </div>
    </section>
  );
}

function QuickEnrollmentSection() {
  return (
    <section className="container mx-auto px-4">
      <AnimatedWrapper>
        <Card className="max-w-4xl mx-auto p-6 md:p-8 lg:p-12 bg-card">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">Start Your Journey Today!</h2>
              <p className="mt-4 text-muted-foreground">Have questions or ready to enroll? Fill out this quick form and we'll get in touch with you.</p>
            </div>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="tel" placeholder="Phone Number" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Instrument" />
                </SelectTrigger>
                <SelectContent>
                  {INSTRUMENTS.map((instrument) => (
                    <SelectItem key={instrument.name} value={instrument.name}>{instrument.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button type="submit" className="w-full">Request a Callback</Button>
            </form>
          </div>
        </Card>
      </AnimatedWrapper>
    </section>
  );
}
