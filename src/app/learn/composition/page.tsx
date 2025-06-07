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
          One of the most well-known composition guidelines. Imagine your frame is divided into <b>nine equal segments</b> by two vertical and two horizontal lines. Placing <b>key elements</b> of your scene <b>along these lines or at their intersections</b> can create a more balanced and engaging image than simply centering the subject.
        </p>
        <Image src="https://placehold.co/700x400.png" alt="Rule of Thirds grid overlay" width={700} height={400} className="rounded-md shadow-md mx-auto" data-ai-hint="thirds grid"/>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Leading Lines</h2>
        <p className="mb-4">
          Use <b>natural lines</b> in your scene (roads, fences, rivers, etc.) to <b>guide the viewer's eye</b> towards the main subject or through the image. Leading lines can add <b>depth</b> and a <b>sense of direction</b> to your photographs.
        </p>
        <Image src="https://placehold.co/600x400.png" alt="Photograph with leading lines" width={600} height={400} className="rounded-md shadow-md mx-auto" data-ai-hint="leading lines"/>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Framing</h2>
        <p className="mb-4">
          Use <b>elements within the scene</b> (like doorways, windows, or tree branches) to create a <b>natural frame</b> around your subject. This can add <b>depth</b>, <b>context</b>, and <b>draw attention</b> to the main point of interest.
        </p>
        <Image src="https://placehold.co/600x400.png" alt="Photograph using framing technique" width={600} height={400} className="rounded-md shadow-md mx-auto" data-ai-hint="framing technique"/>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Symmetry and Patterns</h2>
        <p className="mb-4">
          <b>Symmetrical scenes</b> or <b>repeating patterns</b> can create <b>visually striking</b> and <b>harmonious compositions</b>. Look for <b>balance</b> and <b>repetition</b> in both natural and man-made environments. Sometimes, <b>breaking an established pattern</b> can also create a <b>strong focal point</b>.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-headline mb-4">Negative Space</h2>
        <p className="mb-4">
          The <b>area around and between subjects</b> in an image is called <b>negative space</b>. Effectively using negative space can:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Help your <b>subject stand out</b>.</li>
          <li>Create a <b>sense of scale</b>.</li>
          <li><b>Convey a particular mood</b>.</li>
        </ul>
        <p className="mt-2">
          Don't be afraid of empty areas in your composition.
        </p>
      </section>
    </ContentPage>
  );
}
