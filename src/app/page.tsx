import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NAV_ITEMS, LEARNING_MODULES } from "@/lib/app-constants";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const learnPath = NAV_ITEMS.find(item => item.title === "Learn")?.href || "/learn";
  const feedbackPath = NAV_ITEMS.find(item => item.title === "AI Feedback")?.href || "/feedback";

  return (
    <div className="container mx-auto py-8 px-4">
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-headline font-bold mb-6">
          Welcome to SilverScreen Studies
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Embark on your journey into the timeless art of film photography. Master your camera, understand light, and create stunning images.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg" className="font-semibold">
            <Link href={learnPath}>
              Start Learning <BookOpen className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-semibold">
            <Link href={feedbackPath}>
              Get AI Feedback <Sparkles className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-headline font-semibold mb-8 text-center">Explore Our Modules</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEARNING_MODULES.slice(0, 3).map((module) => (
            <Link href={module.href} key={module.href} className="block group">
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                       {module.icon && <module.icon className="h-8 w-8 text-primary" />}
                      <CardTitle className="text-2xl font-headline group-hover:text-primary transition-colors">
                        {module.title}
                      </CardTitle>
                    </div>
                     <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                     <Image
                        src={`https://placehold.co/600x400.png`}
                        alt={module.title}
                        width={600}
                        height={400}
                        className="rounded-md object-cover aspect-video"
                        data-ai-hint={`black white ${module.imageHint}`}
                      />
                  </CardContent>
                </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
            <Button asChild variant="outline">
                <Link href={learnPath}>
                    View All Modules <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </section>
      
      <section className="bg-muted/50 p-8 rounded-lg shadow">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-headline font-semibold mb-4">
              Capture the World in Monochrome
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Inspired by masters like Ansel Adams, SilverScreen Studies focuses on the rich tradition of black and white film photography. Learn to see the world in tones and contrasts, and develop a unique photographic voice.
            </p>
            <Button asChild className="font-semibold">
              <Link href="/learn/composition">
                Learn Composition
              </Link>
            </Button>
          </div>
          <div>
            <Image
              src="https://placehold.co/800x600.png"
              alt="Ansel Adams style landscape"
              width={800}
              height={600}
              className="rounded-md shadow-lg object-cover"
              data-ai-hint="black white landscape"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
