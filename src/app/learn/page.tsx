import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LEARNING_MODULES } from "@/lib/app-constants";
import Link from "next/link";
import Image from "next/image";

export default function LearnPage() {
  return (
    <div>
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-headline font-bold mb-4">Learning Modules</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Dive into the core concepts of film photography. Each module is designed to build your skills step by step.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {LEARNING_MODULES.map((module) => (
          <Link href={module.href} key={module.href} legacyBehavior>
            <a className="block group">
              <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                <div className="relative w-full h-56">
                  <Image
                    src={`https://placehold.co/400x300.png`}
                    alt={module.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={module.imageHint}
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-1">
                    {module.icon && <module.icon className="h-7 w-7 text-primary" />}
                    <CardTitle className="text-2xl font-headline group-hover:text-primary transition-colors">
                      {module.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base">{module.description}</CardDescription>
                </CardHeader>
              </Card>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
