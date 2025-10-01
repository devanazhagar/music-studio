"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FEE_STRUCTURE, INSTRUMENTS, PAYMENT_METHODS } from "@/lib/constants";
import { CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { PageHeader } from "@/components/page-header";
import { AnimatedWrapper } from "@/components/animated-wrapper";
import { useState } from "react";
import { BookTrialModal } from "@/components/book-trial-modal";

const formSchema = z.object({
  studentName: z.string().min(2, { message: "Student name must be at least 2 characters." }),
  age: z.coerce.number().min(5, { message: "Minimum age is 5." }).max(100, { message: "Please enter a valid age." }),
  parentName: z.string().optional(),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  instrument: z.string({ required_error: "Please select an instrument." }),
  timing: z.string({ required_error: "Please select a preferred timing." }),
  experience: z.string({ required_error: "Please select experience level." }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function EnrollmentPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      age: undefined,
      parentName: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    toast({
      title: "Registration Submitted!",
      description: "Thank you for your interest. We will contact you shortly to confirm your enrollment.",
    });
    form.reset();
  };

  return (
    <>
      <PageHeader
        title="Enrollment & Admissions"
        description="Join our musical family. Follow these simple steps to start your journey with Harmony Hub."
      />
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          <main className="lg:col-span-2">
            <AnimatedWrapper>
                <EnrollmentSteps />
            </AnimatedWrapper>
            
            <AnimatedWrapper delay={0.2}>
              <Card className="mt-12">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">Online Registration Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField control={form.control} name="studentName" render={({ field }) => (
                          <FormItem><FormLabel>Student Name</FormLabel><FormControl><Input placeholder="Full Name" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="age" render={({ field }) => (
                          <FormItem><FormLabel>Age</FormLabel><FormControl><Input type="number" placeholder="5" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                      </div>
                      <FormField control={form.control} name="parentName" render={({ field }) => (
                        <FormItem><FormLabel>Parent/Guardian Name (if student is under 18)</FormLabel><FormControl><Input placeholder="Parent's Name" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input placeholder="+91 98765 43210" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                      </div>
                      <div className="grid sm:grid-cols-3 gap-6">
                        <FormField control={form.control} name="instrument" render={({ field }) => (
                          <FormItem><FormLabel>Instrument</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger></FormControl><SelectContent>{INSTRUMENTS.map(i => <SelectItem key={i.name} value={i.name}>{i.name}</SelectItem>)}</SelectContent></Select><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="timing" render={({ field }) => (
                          <FormItem><FormLabel>Preferred Timing</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger></FormControl><SelectContent><SelectItem value="Morning">Morning</SelectItem><SelectItem value="Evening">Evening</SelectItem><SelectItem value="Weekend">Weekend</SelectItem></SelectContent></Select><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="experience" render={({ field }) => (
                          <FormItem><FormLabel>Experience</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger></FormControl><SelectContent><SelectItem value="None">None</SelectItem><SelectItem value="Basic">Basic</SelectItem><SelectItem value="Intermediate">Intermediate</SelectItem></SelectContent></Select><FormMessage /></FormItem>
                        )} />
                      </div>
                      <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem><FormLabel>Message / Requirements</FormLabel><FormControl><Textarea placeholder="Any specific goals or questions?" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                         {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                         Submit Registration
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </AnimatedWrapper>
          </main>
          
          <aside className="space-y-8">
            <AnimatedWrapper delay={0.1}>
              <Card>
                <CardHeader><CardTitle className="font-headline text-primary">Fee Structure</CardTitle></CardHeader>
                <CardContent>
                  <Table>
                    <TableBody>
                      {FEE_STRUCTURE.map((fee) => (
                        <TableRow key={fee.plan}>
                          <TableCell className="font-medium">{fee.plan}</TableCell>
                          <TableCell className="text-right">
                            ₹{fee.price.toLocaleString('en-IN')}
                            {fee.discount && <span className="text-xs text-primary block">{fee.discount}</span>}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <div className="mt-4">
                    <p className="text-sm font-semibold mb-2">We Accept:</p>
                    <div className="flex items-center gap-4 text-muted-foreground">
                        {PAYMENT_METHODS.map(method => (
                            <div key={method.name} className="flex items-center gap-2">
                                <method.icon className="h-5 w-5"/>
                            </div>
                        ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedWrapper>
            
            <AnimatedWrapper delay={0.2}>
              <Card className="bg-primary text-primary-foreground text-center p-8">
                <h3 className="font-headline text-2xl font-bold">Not sure yet?</h3>
                <p className="mt-2 opacity-80">Book a free, no-obligation trial class to experience our teaching style.</p>
                <BookTrialModal>
                    <Button variant="secondary" className="mt-6">Book Free Trial Class</Button>
                </BookTrialModal>
              </Card>
            </AnimatedWrapper>
          </aside>
        </div>
      </div>
    </>
  );
}

function EnrollmentSteps() {
    const steps = [
        { title: "Register Online", description: "Fill out the form with your details." },
        { title: "Book a Trial", description: "Schedule a free trial class with our instructor." },
        { title: "Join & Learn", description: "Complete the payment and start your musical journey." }
    ]
    return (
        <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((step, index) => (
                <div key={step.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold font-headline text-xl">
                        {index + 1}
                    </div>
                    <div>
                        <h3 className="font-headline font-semibold text-lg">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
