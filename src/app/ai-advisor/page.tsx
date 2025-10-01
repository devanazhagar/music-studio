"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Lightbulb, Music } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { AnimatedWrapper } from "@/components/animated-wrapper";
import { INSTRUMENTS } from '@/lib/constants';

const formSchema = z.object({
  age: z.coerce.number().min(5, { message: "Minimum age is 5." }).max(100, { message: "Please enter a valid age." }),
  interests: z.string().min(1, { message: "Please select an interest." }),
  experience: z.string().min(1, { message: "Please select your experience level." }),
});

type FormValues = z.infer<typeof formSchema>;

const mockRecommendation = {
    instrument: 'Piano',
    reason: 'Based on your interest in classical music and having no prior experience, the piano is a great foundational instrument. It provides a strong basis in music theory and is very rewarding for beginners.',
    level: 'Beginner',
    nextSteps: 'We recommend starting with our Piano - Beginner course. You can book a free trial class to see if it\'s the right fit for you!'
};

export default function AiAdvisorPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<typeof mockRecommendation | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { age: undefined, interests: "", experience: "" },
  });

  // NOTE: This is a mock submission handler. In a real application,
  // this would call the Genkit AI flow.
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setRecommendation(null);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setRecommendation(mockRecommendation);
    setIsLoading(false);
  };

  return (
    <>
      <PageHeader
        title="AI Course Advisor"
        description="Not sure where to start? Let our AI-powered advisor recommend the perfect course for you."
      />
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
            <AnimatedWrapper>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl text-primary">Find Your Perfect Instrument</CardTitle>
                        <CardDescription>Answer a few questions and get a personalized recommendation.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField control={form.control} name="age" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Your Age</FormLabel>
                                    <FormControl><Input type="number" placeholder="e.g., 25" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="interests" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Musical Interests</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl><SelectTrigger><SelectValue placeholder="Select a genre" /></SelectTrigger></FormControl>
                                    <SelectContent>
                                        <SelectItem value="classical">Classical & Instrumental</SelectItem>
                                        <SelectItem value="pop-rock">Pop / Rock</SelectItem>
                                        <SelectItem value="jazz-blues">Jazz / Blues</SelectItem>
                                        <SelectItem value="indian-classical">Indian Classical</SelectItem>
                                        <SelectItem value="undecided">I'm not sure</SelectItem>
                                    </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="experience" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Previous Musical Experience</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl><SelectTrigger><SelectValue placeholder="Select your experience" /></SelectTrigger></FormControl>
                                    <SelectContent>
                                        <SelectItem value="none">None (Complete Beginner)</SelectItem>
                                        <SelectItem value="basic">A little bit (self-taught)</SelectItem>
                                        <SelectItem value="intermediate">I've taken lessons before</SelectItem>
                                    </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Get Recommendation'}
                            </Button>
                        </form>
                        </Form>
                    </CardContent>
                </Card>
            </AnimatedWrapper>
            
            <div className="mt-8 lg:mt-0">
                {isLoading && (
                    <AnimatedWrapper>
                        <Card className="flex flex-col items-center justify-center text-center p-8 h-full">
                            <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
                            <h3 className="font-headline text-xl font-semibold">Analyzing your profile...</h3>
                            <p className="text-muted-foreground mt-2">Our AI is finding the best musical path for you!</p>
                        </Card>
                    </AnimatedWrapper>
                )}
                {recommendation && !isLoading && (
                    <AnimatedWrapper>
                        <Card className="bg-primary/5 h-full">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl text-primary">Our Recommendation For You</CardTitle>
                                <CardDescription>Based on your profile, we suggest:</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-4 bg-background p-4 rounded-lg">
                                    <Music className="w-10 h-10 text-primary" />
                                    <h3 className="text-3xl font-bold font-headline">{recommendation.instrument}</h3>
                                </div>
                                <div className="p-4 rounded-lg border">
                                    <div className="flex items-start gap-3">
                                        <Lightbulb className="w-5 h-5 text-primary mt-1 shrink-0" />
                                        <div>
                                            <h4 className="font-semibold">Why this instrument?</h4>
                                            <p className="text-sm text-muted-foreground">{recommendation.reason}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Recommended Level:</h4>
                                    <p className="text-sm text-muted-foreground">{recommendation.level}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Next Steps:</h4>
                                    <p className="text-sm text-muted-foreground">{recommendation.nextSteps}</p>
                                </div>
                                <Button asChild className="w-full mt-4">
                                    <a href="/courses">Explore {recommendation.instrument} Courses</a>
                                </Button>
                            </CardContent>
                        </Card>
                    </AnimatedWrapper>
                )}
                {!recommendation && !isLoading && (
                     <Card className="flex flex-col items-center justify-center text-center p-8 h-full bg-muted/50 border-dashed">
                        <Lightbulb className="h-12 w-12 text-muted-foreground mb-4" />
                        <h3 className="font-headline text-xl font-semibold text-muted-foreground">Your recommendation will appear here</h3>
                        <p className="text-muted-foreground mt-2">Fill out the form to get started.</p>
                    </Card>
                )}
            </div>
        </div>
      </div>
    </>
  );
}
