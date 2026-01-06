'use server';
/**
 * @fileOverview Provides AI-driven insights based on successful case studies of similar projects.
 *
 * - getProjectGuidance - A function that retrieves project guidance.
 * - ProjectGuidanceInput - The input type for the getProjectGuidance function.
 * - ProjectGuidanceOutput - The return type for the getProjectGuidance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectGuidanceInputSchema = z.object({
  projectDescription: z.string().describe('Description of the project, including its goals, current status, and any challenges.'),
  projectPhotoDataUri: z.string().describe("A photo related to the project, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'.").optional(),
});
export type ProjectGuidanceInput = z.infer<typeof ProjectGuidanceInputSchema>;

const ProjectGuidanceOutputSchema = z.object({
  guidance: z.string().describe('AI-driven insights and advice based on successful case studies of similar projects.'),
});
export type ProjectGuidanceOutput = z.infer<typeof ProjectGuidanceOutputSchema>;

export async function getProjectGuidance(input: ProjectGuidanceInput): Promise<ProjectGuidanceOutput> {
  return projectGuidanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'projectGuidancePrompt',
  input: {schema: ProjectGuidanceInputSchema},
  output: {schema: ProjectGuidanceOutputSchema},
  prompt: `You are a project management expert with extensive knowledge of municipal projects.

  Based on successful case studies of similar projects, provide actionable advice and solutions for overcoming challenges in the current project.

  Consider the project description and any provided photo to tailor your guidance.

  Project Description: {{{projectDescription}}}
  {{#if projectPhotoDataUri}}
  Photo: {{media url=projectPhotoDataUri}}
  {{/if}}
  `,
});

const projectGuidanceFlow = ai.defineFlow(
  {
    name: 'projectGuidanceFlow',
    inputSchema: ProjectGuidanceInputSchema,
    outputSchema: ProjectGuidanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
