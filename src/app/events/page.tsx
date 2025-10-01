"use client";

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';
import { EVENTS } from '@/lib/constants';
import { PageHeader } from '@/components/page-header';
import { Calendar } from "@/components/ui/calendar";
import { AnimatedWrapper } from '@/components/animated-wrapper';
import { useState } from 'react';

export default function EventsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const upcomingEvents = EVENTS.filter(e => e.isUpcoming);
  const pastEvents = EVENTS.filter(e => !e.isUpcoming);

  return (
    <>
      <PageHeader
        title="Events & Recitals"
        description="Stay updated with our workshops, concerts, and student performances."
      />
      <div className="container mx-auto px-4 py-16 sm:py-24 space-y-24">
        
        <section>
            <AnimatedWrapper>
                <h2 className="font-headline text-3xl font-bold text-primary mb-8 text-center">Upcoming Events</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event, index) => (
                    <AnimatedWrapper key={event.name} delay={index * 0.1}>
                        <Card className="h-full flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
                            <div className="relative h-56 w-full">
                                <Image
                                    src={event.image.imageUrl}
                                    alt={event.name}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={event.image.imageHint}
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="font-headline">{event.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow space-y-3">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CalendarIcon className="h-4 w-4" />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Clock className="h-4 w-4" />
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <MapPin className="h-4 w-4" />
                                    <span>{event.location}</span>
                                </div>
                                <p className="text-sm text-muted-foreground pt-2">{event.description}</p>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Register Now</Button>
                            </CardFooter>
                        </Card>
                    </AnimatedWrapper>
                ))}
                </div>
            </AnimatedWrapper>
        </section>

        <section>
            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <AnimatedWrapper>
                        <h2 className="font-headline text-3xl font-bold text-primary mb-8 text-center lg:text-left">Past Events Gallery</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {pastEvents.map((event, index) => (
                                <AnimatedWrapper key={event.name} delay={index * 0.05}>
                                    <div className="relative aspect-square rounded-lg overflow-hidden group">
                                        <Image
                                            src={event.image.imageUrl}
                                            alt={event.name}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            data-ai-hint={event.image.imageHint}
                                        />
                                        <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                                            <p className="text-white font-semibold text-sm">{event.name}</p>
                                        </div>
                                    </div>
                                </AnimatedWrapper>
                            ))}
                        </div>
                    </AnimatedWrapper>
                </div>
                <div>
                     <AnimatedWrapper>
                        <h2 className="font-headline text-3xl font-bold text-primary mb-8 text-center lg:text-left">Monthly Recital Calendar</h2>
                        <Card>
                            <CardContent className="p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    className="p-0"
                                    classNames={{
                                        root: "w-full",
                                        months: "w-full",
                                        month: "w-full",
                                        table: "w-full",
                                        head_row: "w-full",
                                        row: "w-full",
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </AnimatedWrapper>
                </div>
            </div>
        </section>
      </div>
    </>
  );
}
