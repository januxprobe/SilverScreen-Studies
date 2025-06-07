import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RESOURCE_CATEGORIES } from "@/lib/app-constants";
import { ExternalLink, BookOpen, School, Users } from "lucide-react";
import Link from "next/link";

const CategoryIcon = ({ name }: { name: string }) => {
  if (name.toLowerCase().includes("school")) return <School className="h-6 w-6 text-primary" />;
  if (name.toLowerCase().includes("communit") || name.toLowerCase().includes("website")) return <Users className="h-6 w-6 text-primary" />;
  return <BookOpen className="h-6 w-6 text-primary" />;
};

export default function ResourcesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-headline font-bold mb-4">Photography Resources</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore a curated list of websites, schools, and communities to further your film photography journey.
        </p>
      </header>

      <div className="space-y-12">
        {RESOURCE_CATEGORIES.map((category) => (
          <section key={category.name}>
            <div className="flex items-center gap-3 mb-6">
              <CategoryIcon name={category.name} />
              <h2 className="text-3xl font-headline font-semibold">{category.name}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.resources.map((resource) => (
                <Card key={resource.name} className="flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-headline">
                      <Link href={resource.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                        {resource.name}
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-base">{resource.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
