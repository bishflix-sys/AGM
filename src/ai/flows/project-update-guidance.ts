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
  strengths: z.array(z.string()).describe('List of 2-3 key strengths of the project.'),
  weaknesses: z.array(z.string()).describe('List of 2-3 key weaknesses or risks.'),
  recommendations: z.array(z.string()).describe('List of 3-4 actionable recommendations to improve the project.'),
});
export type ProjectGuidanceOutput = z.infer<typeof ProjectGuidanceOutputSchema>;

export async function getProjectGuidance(input: ProjectGuidanceInput): Promise<ProjectGuidanceOutput> {
  return projectGuidanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'projectGuidancePrompt',
  input: {schema: ProjectGuidanceInputSchema},
  output: {schema: ProjectGuidanceOutputSchema},
  prompt: `You are a project management expert with extensive knowledge of municipal projects in Senegal.

  Analyze the provided project information and provide a structured analysis.
  Based on successful case studies of similar projects, identify the project's strengths, potential weaknesses or risks, and provide actionable recommendations.

  Your response must be in French.

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
