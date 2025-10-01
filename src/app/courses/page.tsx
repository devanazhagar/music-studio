"use client";

import { useState } from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { COURSES } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { PageHeader } from '@/components/page-header';
import { BookTrialModal } from '@/components/book-trial-modal';
import { AnimatedWrapper } from '@/components/animated-wrapper';

const ALL_AGE_GROUPS = ['All', 'Kids (5-12)', 'Teens (13-18)', 'Adults (18+)'];

export default function CoursesPage() {
  const [activeAgeGroup, setActiveAgeGroup] = useState('All');

  const filteredCourses = activeAgeGroup === 'All'
    ? COURSES
    : COURSES.filter(course => course.ageGroups.includes(activeAgeGroup));

  return (
    <>
      <PageHeader
        title="Our Courses"
        description="Explore our comprehensive range of music courses for all ages and skill levels."
      />
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <AnimatedWrapper>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
            {ALL_AGE_GROUPS.map((group) => (
              <Button
                key={group}
                variant={activeAgeGroup === group ? 'default' : 'outline'}
                onClick={() => setActiveAgeGroup(group)}
              >
                {group}
              </Button>
            ))}
          </div>
        </AnimatedWrapper>

        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto space-y-4">
          {filteredCourses.map((course, index) => (
            <AnimatedWrapper key={course.instrument} delay={index * 0.1}>
              <AccordionItem value={course.instrument} className="border rounded-lg bg-card overflow-hidden">
                <AccordionTrigger className="p-6 text-lg font-headline hover:no-underline">
                  <div className="flex items-center gap-4">
                    <Image
                      src={course.image.imageUrl}
                      alt={course.instrument}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                      data-ai-hint={course.image.imageHint}
                    />
                    <span>{course.instrument}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-6">
                    {course.levels.map((level) => (
                      <Card key={level.name} className="bg-primary/5">
                        <CardContent className="p-4">
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="md:col-span-2">
                              <h3 className="font-headline font-semibold text-primary">{level.name}</h3>
                              <p className="text-sm text-muted-foreground mt-1 mb-3">
                                <span className="font-semibold text-foreground">₹{level.price.toLocaleString('en-IN')}</span> / month
                              </p>
                              <div className="flex flex-wrap gap-2 text-xs mb-3">
                                <Badge variant="secondary">{level.duration}</Badge>
                                <Badge variant="secondary">{level.frequency}</Badge>
                              </div>
                              <p className="text-sm font-medium mb-2">What you'll learn:</p>
                              <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground">
                                {level.learns.map((item, i) => <li key={i}>{item}</li>)}
                              </ul>
                            </div>
                            <div className="flex flex-col justify-between items-start md:items-end">
                                <div>
                                    <p className="text-sm font-medium mb-2 text-left md:text-right">Batch Timings:</p>
                                    <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                                        {level.timings.map(timing => <Badge key={timing} variant="outline">{timing}</Badge>)}
                                    </div>
                                </div>
                                <BookTrialModal defaultInstrument={course.instrument}>
                                    <Button size="sm" className="mt-4 w-full md:w-auto">Enroll Now</Button>
                                </BookTrialModal>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </AnimatedWrapper>
          ))}
        </Accordion>
        
        {filteredCourses.length === 0 && (
            <AnimatedWrapper>
                <div className="text-center mt-12 text-muted-foreground">
                    <p>No courses available for the selected age group.</p>
                </div>
            </AnimatedWrapper>
        )}
      </div>
    </>
  );
}
