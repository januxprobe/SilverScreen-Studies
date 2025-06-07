
'use server';

/**
 * @fileOverview An AI agent that provides personalized feedback on photos.
 *
 * - getPhotoFeedback - A function that handles the photo feedback process.
 * - PhotoFeedbackInput - The input type for the getPhotoFeedback function.
 * - PhotoFeedbackOutput - The return type for the getPhotoFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PhotoFeedbackInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo to be analyzed, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  description: z.string().describe('Optional description of the photo.'),
});
export type PhotoFeedbackInput = z.infer<typeof PhotoFeedbackInputSchema>;

const PhotoFeedbackOutputSchema = z.object({
  feedback: z.string().describe('Personalized feedback on the photo.'),
});
export type PhotoFeedbackOutput = z.infer<typeof PhotoFeedbackOutputSchema>;

export async function getPhotoFeedback(input: PhotoFeedbackInput): Promise<PhotoFeedbackOutput> {
  return photoFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'photoFeedbackPrompt',
  input: {schema: PhotoFeedbackInputSchema},
  output: {schema: PhotoFeedbackOutputSchema},
  prompt: `You are an expert photography teacher, providing personalized feedback to beginner photographers.

  Analyze the following photo and provide feedback on aspects like composition, exposure, and potential improvements.

  Photo: {{media url=photoDataUri}}
  Description: {{{description}}}

  Provide clear and actionable advice to help the photographer improve their skills.
  Your feedback should be encouraging and constructive.
  Do not make any assumptions about the photographer's knowledge or experience.
  Keep your feedback concise and to the point.
  Focus on the most important aspects of the photo.
  If there is no description, do not reference it.`,
});

const photoFeedbackFlow = ai.defineFlow(
  {
    name: 'photoFeedbackFlow',
    inputSchema: PhotoFeedbackInputSchema,
    outputSchema: PhotoFeedbackOutputSchema,
  },
  async (input: PhotoFeedbackInput) => {
    try {
      const {output, usage} = await prompt(input);
      // Ensure the output and its 'feedback' field exist, as per PhotoFeedbackOutputSchema
      if (!output || typeof output.feedback !== 'string') {
        console.error('Photo feedback flow: LLM did not return the expected output structure.', { input, outputFromLLM: output, usage });
        throw new Error('Failed to get structured feedback from AI model. Output was missing or incomplete.');
      }
      return output;
    } catch (e) {
      // Log the error with more context
      console.error('Error executing photoFeedbackFlow:', e instanceof Error ? e.message : String(e), {inputDetails: input});
      // Re-throw a more generic error or a new error with a clearer message for upstream handlers
      if (e instanceof Error) {
        throw new Error(`AI processing error during photo feedback: ${e.message}`);
      }
      throw new Error('An unexpected error occurred during AI photo feedback processing.');
    }
  }
);
