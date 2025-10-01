import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { TEACHERS } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/page-header';
import { BookTrialModal } from '@/components/book-trial-modal';
import { AnimatedWrapper } from '@/components/animated-wrapper';

export default function TeachersPage() {
  return (
    <>
      <PageHeader
        title="Our Expert Instructors"
        description="Meet the passionate and experienced teachers who will guide you on your musical journey."
      />
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEACHERS.map((teacher, index) => (
            <AnimatedWrapper key={teacher.name} delay={index * 0.1}>
              <Card className="h-full flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative h-64 w-full">
                    <Image
                        src={teacher.image.imageUrl}
                        alt={`Professional photo of ${teacher.name}`}
                        fill
                        className="object-cover"
                        data-ai-hint={teacher.image.imageHint}
                    />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{teacher.name}</CardTitle>
                  <CardDescription>{teacher.instrument} Instructor</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{teacher.experience} Experience</Badge>
                        <Badge variant="secondary">{teacher.qualifications}</Badge>
                    </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Specialization:</span> {teacher.specialization}
                  </p>
                  <p className="text-sm text-muted-foreground italic">"{teacher.bio}"</p>
                </CardContent>
                <CardFooter>
                    <BookTrialModal defaultInstrument={teacher.instrument}>
                        <Button className="w-full">Book Trial with {teacher.name.split(' ')[0]}</Button>
                    </BookTrialModal>
                </CardFooter>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </>
  );
}
