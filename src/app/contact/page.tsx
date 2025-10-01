"use client";

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
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";
import { PageHeader } from "@/components/page-header";
import { AnimatedWrapper } from "@/components/animated-wrapper";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number.").optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We will get back to you soon.",
    });
    form.reset();
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        description="We'd love to hear from you. Get in touch with us for any inquiries or to schedule a visit."
      />
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid lg:grid-cols-5 gap-12">
          
          <AnimatedWrapper className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem><FormLabel>Name</FormLabel><FormControl><Input placeholder="Your Name" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="your@email.com" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>
                     <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem><FormLabel>Phone (Optional)</FormLabel><FormControl><Input placeholder="+91 98765 43210" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                    <FormField control={form.control} name="subject" render={({ field }) => (
                        <FormItem><FormLabel>Subject</FormLabel><FormControl><Input placeholder="Inquiry about Piano classes" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea placeholder="Your message here..." rows={5} {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                       {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                       Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </AnimatedWrapper>

          <aside className="lg:col-span-2 space-y-8">
            <AnimatedWrapper delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 mt-1 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-muted-foreground text-sm">123 Music Street, T. Nagar, Chennai - 600017</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 mt-1 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <a href="tel:+919876543210" className="text-muted-foreground text-sm hover:text-primary">+91 98765 43210</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 mt-1 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a href="mailto:info@harmonymusicacademy.com" className="text-muted-foreground text-sm hover:text-primary">info@harmonymusicacademy.com</a>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 mt-1 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold">Business Hours</h4>
                      <p className="text-muted-foreground text-sm">Mon-Sat: 9AM-8PM, Sun: 10AM-6PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedWrapper>
            
            <AnimatedWrapper delay={0.2}>
              <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
                {/* Google Maps Embed Placeholder */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.635398939466!2d80.2443653152677!3d13.05920299079815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266ed73010c79%3A0x2de4a5e3505c2858!2sThyagaraya%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1626880000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location of Harmony Hub"
                ></iframe>
              </div>
            </AnimatedWrapper>
            
            <AnimatedWrapper delay={0.3}>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-lg">Follow Us</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex space-x-4">
                            {SOCIAL_LINKS.map((link) => (
                                <Button key={link.name} variant="outline" size="icon" asChild>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                                        <link.icon className="h-5 w-5" />
                                        <span className="sr-only">{link.name}</span>
                                    </a>
                                </Button>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </AnimatedWrapper>
          </aside>
        </div>
      </div>
    </>
  );
}
