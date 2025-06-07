import ContentPage from '@/components/ContentPage';
import Image from 'next/image';

export default function CompositionPage() {
  return (
    <ContentPage 
      title="Mastering Photographic Composition"
      description="Learn the fundamental principles of composition to create more impactful and visually appealing photographs."
      mainImage={{src: "https://placehold.co/800x400.png", alt: "Well-composed black and white photograph", aiHint: "composition example"}}
    >
      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Rule of Thirds</h2>
        <p className="mb-4">
          One of the most well-known composition guidelines. Imagine your frame is divided into nine equal segments by two vertical and two horizontal lines. Placing key elements of your scene along these lines or at their intersections can create a more balanced and engaging image than simply centering the subject.
        </p>
        <Image src="https://placehold.co/700x400.png" alt="Rule of Thirds grid overlay" width={700} height={400} className="rounded-md shadow-md mx-auto" data-ai-hint="thirds grid"/>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Leading Lines</h2>
        <p className="mb-4">
          Use natural lines in your scene (roads, fences, rivers, etc.) to guide the viewer's eye towards the main subject or through the image. Leading lines can add depth and a sense of direction to your photographs.
        </p>
        <Image src="https://placehold.co/600x400.png" alt="Photograph with leading lines" width={600} height={400} className="rounded-md shadow-md mx-auto" data-ai-hint="leading lines"/>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Framing</h2>
        <p className="mb-4">
          Use elements within the scene (like doorways, windows, or tree branches) to create a natural frame around your subject. This can add depth, context, and draw attention to the main point of interest.
        </p>
        <Image src="https://placehold.co/600x400.png" alt="Photograph using framing technique" width={600} height={400} className="rounded-md shadow-md mx-auto" data-ai-hint="framing technique"/>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Symmetry and Patterns</h2>
        <p className="mb-4">
          Symmetrical scenes or repeating patterns can create visually striking and harmonious compositions. Look for balance and repetition in both natural and man-made environments. Sometimes, breaking an established pattern can also create a strong focal point.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-headline mb-4">Negative Space</h2>
        <p>
          The area around and between subjects in an image is called negative space. Effectively using negative space can help your subject stand out, create a sense of scale, or convey a particular mood. Don't be afraid of empty areas in your composition.
        </p>
      </section>
    </ContentPage>
  );
}
