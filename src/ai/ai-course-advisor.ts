'use server';
/**
 * @fileOverview AI-powered course advisor tool for personalized course recommendations.
 *
 * - getCourseRecommendations - A function that provides course recommendations based on user input.
 * - CourseAdvisorInput - The input type for the getCourseRecommendations function.
 * - CourseAdvisorOutput - The return type for the getCourseRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CourseAdvisorInputSchema = z.object({
  age: z
    .number()
    .describe('The age of the student.')
    .min(5),
  interests: z
    .string()
    .describe('The musical interests of the student (e.g., piano, guitar, vocal).'),
  experienceLevel: z
    .enum(['None', 'Beginner', 'Intermediate', 'Advanced'])
    .describe('The experience level of the student.'),
});
export type CourseAdvisorInput = z.infer<typeof CourseAdvisorInputSchema>;

const CourseAdvisorOutputSchema = z.object({
  recommendedCourses: z
    .array(z.string())
    .describe('A list of recommended courses based on the input criteria.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the course recommendations.'),
});
export type CourseAdvisorOutput = z.infer<typeof CourseAdvisorOutputSchema>;

export async function getCourseRecommendations(
  input: CourseAdvisorInput
): Promise<CourseAdvisorOutput> {
  return courseAdvisorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'courseAdvisorPrompt',
  input: {schema: CourseAdvisorInputSchema},
  output: {schema: CourseAdvisorOutputSchema},
  prompt: `You are an AI course advisor for Harmony Music Academy in Chennai, Tamil Nadu.  You provide personalized course recommendations based on the student's age, interests, and experience level.  Consider courses in Piano, Guitar, Drums, Violin, Flute, Keyboard, and Vocal. Explain the reason for each recommendation.

Age: {{{age}}}
Interests: {{{interests}}}
Experience Level: {{{experienceLevel}}}

Based on this information, what courses would you recommend?  Provide the recommendations as a list of course names, and include a brief explanation of why each course is recommended for the student.

Format your output as a JSON object conforming to the CourseAdvisorOutputSchema schema.
`,
});

const courseAdvisorFlow = ai.defineFlow(
  {
    name: 'courseAdvisorFlow',
    inputSchema: CourseAdvisorInputSchema,
    outputSchema: CourseAdvisorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
