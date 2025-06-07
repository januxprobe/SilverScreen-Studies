'use client';

import { useState, type FormEvent } from 'react';
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Sparkles, UploadCloud, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import type { PhotoFeedbackInput, PhotoFeedbackOutput } from '@/ai/flows/photo-feedback';
import { getPhotoFeedbackAction } from '@/app/feedback/actions'; // Server action

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

const formSchema = z.object({
  photo: z.custom<FileList>()
    .refine(files => files && files.length === 1, "Photo is required.")
    .refine(files => files && files[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      files => files && ACCEPTED_IMAGE_TYPES.includes(files[0]?.type),
      "Only .jpg, .png, .webp, and .gif formats are supported."
    ),
  description: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function PhotoUploadForm() {
  const [feedbackResult, setFeedbackResult] = useState<PhotoFeedbackOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const photoFile = watch("photo");

  // Generate preview URL
  useState(() => {
    if (photoFile && photoFile.length > 0) {
      const file = photoFile[0];
      if (ACCEPTED_IMAGE_TYPES.includes(file.type) && file.size <= MAX_FILE_SIZE) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setPreviewUrl(null);
      }
    } else {
      setPreviewUrl(null);
    }
  // photoFile is a FileList, useEffect hook requires a stable reference or a primitive value.
  // Using photoFile[0]?.name or similar might be better if photoFile itself causes re-renders.
  // For now, this should work, but watch for performance issues with large FileList objects.
  // Simplified by removing this useEffect and handling preview directly in onChange for input.
  });


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (ACCEPTED_IMAGE_TYPES.includes(file.type) && file.size <= MAX_FILE_SIZE) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setPreviewUrl(null); // Clear preview if invalid
      }
    } else {
      setPreviewUrl(null);
    }
    // Manually trigger validation for the photo field using react-hook-form's API if needed,
    // or rely on the resolver during submit. For now, zod resolver handles it.
  };


  const processSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setError(null);
    setFeedbackResult(null);

    if (!data.photo || data.photo.length === 0) {
      setError("Please select a photo to upload.");
      setIsLoading(false);
      return;
    }

    const file = data.photo[0];
    const reader = new FileReader();

    reader.onloadend = async () => {
      const photoDataUri = reader.result as string;
      const input: PhotoFeedbackInput = {
        photoDataUri,
        description: data.description || '',
      };

      try {
        const result = await getPhotoFeedbackAction(input);
        if (result.error) {
          setError(result.error);
        } else if (result.data) {
          setFeedbackResult(result.data);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unexpected error occurred.");
      } finally {
        setIsLoading(false);
      }
    };

    reader.onerror = () => {
      setError("Failed to read the photo file.");
      setIsLoading(false);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-8">
      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-headline flex items-center gap-2">
            <Sparkles className="h-7 w-7 text-accent" /> Get AI Photo Feedback
          </CardTitle>
          <CardDescription>
            Upload a photo (max 5MB: JPG, PNG, WEBP, GIF) and an optional description to receive personalized photography tips from our AI.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(processSubmit)}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="photo" className="text-lg">Photo</Label>
              <Input
                id="photo"
                type="file"
                accept={ACCEPTED_IMAGE_TYPES.join(",")}
                {...register("photo")}
                onChange={handleFileChange}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
              {errors.photo && <p className="text-sm text-destructive">{errors.photo.message}</p>}
            </div>

            {previewUrl && (
              <div className="mt-4 border rounded-md p-2 bg-muted/30">
                <Image src={previewUrl} alt="Photo preview" width={500} height={300} className="rounded-md object-contain max-h-[300px] w-auto mx-auto" />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="description" className="text-lg">Optional Description</Label>
              <Textarea
                id="description"
                {...register("description")}
                placeholder="e.g., 'Shot on Ilford HP5, 50mm lens, f/8. Trying to capture morning light.'"
                rows={3}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-stretch gap-4">
             <Button type="submit" disabled={isLoading} className="w-full text-lg py-6">
              {isLoading ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <UploadCloud className="mr-2 h-5 w-5" />
              )}
              {isLoading ? 'Analyzing...' : 'Get Feedback'}
            </Button>
            { (feedbackResult || error) && 
              <Button type="button" variant="outline" onClick={() => { reset(); setPreviewUrl(null); setFeedbackResult(null); setError(null); }} className="w-full">
                Upload Another Photo
              </Button>
            }
          </CardFooter>
        </form>
      </Card>

      {error && (
        <Alert variant="destructive" className="max-w-2xl mx-auto">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {feedbackResult && (
        <Card className="max-w-2xl mx-auto mt-8 shadow-xl bg-gradient-to-br from-background to-muted/30">
          <CardHeader>
            <CardTitle className="text-3xl font-headline flex items-center gap-2">
              <ImageIcon className="h-7 w-7 text-primary" /> AI Feedback Result
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none text-foreground">
              <p>{feedbackResult.feedback}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
