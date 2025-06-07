'use server';

import { getPhotoFeedback, type PhotoFeedbackInput, type PhotoFeedbackOutput } from '@/ai/flows/photo-feedback';
import { z } from 'zod';

// Define a schema for the action input to ensure type safety if needed,
// but PhotoFeedbackInput is already well-defined by Genkit.

interface ActionResult {
  data?: PhotoFeedbackOutput;
  error?: string;
}

export async function getPhotoFeedbackAction(input: PhotoFeedbackInput): Promise<ActionResult> {
  try {
    // Validate input using Zod if an additional layer of validation specific to the action is needed
    // For now, assuming input conforms to PhotoFeedbackInput from the AI flow.
    
    // Call the Genkit flow
    const result = await getPhotoFeedback(input);
    return { data: result };
  } catch (error) {
    console.error("Error in getPhotoFeedbackAction:", error);
    if (error instanceof z.ZodError) {
      return { error: `Validation failed: ${error.errors.map(e => e.message).join(', ')}` };
    }
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: 'An unexpected error occurred while processing your photo.' };
  }
}
