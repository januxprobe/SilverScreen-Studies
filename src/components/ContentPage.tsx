import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

interface ContentPageProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  mainImage?: {
    src: string;
    alt: string;
    aiHint?: string;
  };
}

export default function ContentPage({ title, description, children, mainImage }: ContentPageProps) {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-headline">{title}</CardTitle>
          {description && <CardDescription className="text-lg font-body mt-2">{description}</CardDescription>}
        </CardHeader>
        {mainImage && (
          <div className="px-6 pb-6">
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              width={800}
              height={450}
              className="rounded-md object-cover w-full"
              data-ai-hint={mainImage.aiHint || "photography"}
            />
          </div>
        )}
        <CardContent className="prose prose-lg max-w-none prose-headings:font-headline prose-p:font-body prose-strong:font-semibold text-foreground">
          {children}
        </CardContent>
      </Card>
    </div>
  );
}
