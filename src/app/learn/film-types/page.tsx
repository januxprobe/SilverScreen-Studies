import ContentPage from '@/components/ContentPage';
import Image from 'next/image';

export default function FilmTypesPage() {
  return (
    <ContentPage 
      title="Exploring Film Types"
      description="Discover the variety of photographic films available and their unique characteristics."
      mainImage={{src: "https://placehold.co/800x400.png", alt: "Various film rolls and boxes", aiHint: "film rolls"}}
    >
      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Black and White Negative Film</h2>
        <p className="mb-4">
          The classic choice for many film photographers, especially beginners. B&W negative film produces a negative image (lights appear dark, darks appear light) which is then reversed during printing or scanning.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li><strong>Characteristics:</strong> Known for its tonal range, contrast control (influenced by film choice, exposure, and development), and distinct grain structure.</li>
          <li><strong>Popular Stocks:</strong> Ilford HP5 Plus, Kodak Tri-X 400, Kodak T-MAX, Fomapan, Kentmere.</li>
          <li><strong>Development:</strong> Relatively straightforward to develop at home or by labs using standard B&W chemistry.</li>
        </ul>
        <Image src="https://placehold.co/600x350.png" alt="Black and white film negative strip" width={600} height={350} className="rounded-md shadow-md mx-auto" data-ai-hint="negative strip"/>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Color Negative Film (C-41)</h2>
        <p className="mb-4">
          The most common type of color film. It produces a negative image with an orange mask (to help with color correction during printing).
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li><strong>Characteristics:</strong> Generally offers good exposure latitude (forgiving of minor over/underexposure), a range of color palettes (some films are more saturated, others more muted or warmer/cooler).</li>
          <li><strong>Popular Stocks:</strong> Kodak Portra (400, 160, 800), Kodak Gold 200, Kodak ColorPlus 200, Fujifilm Superia X-TRA 400, Cinestill 800T.</li>
          <li><strong>Development:</strong> Processed using C-41 chemistry, which is standardized and widely available at labs. Home development is possible but more complex than B&W.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Color Reversal Film / Slide Film (E-6)</h2>
        <p className="mb-4">
          Also known as slide film, this type produces a positive image directly on the film. When you hold it up to the light, you see the image as it will appear. Slides are often mounted for projection.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li><strong>Characteristics:</strong> Known for vibrant colors, high contrast, and fine grain. Less exposure latitude than color negative film, so exposure needs to be very accurate.</li>
          <li><strong>Popular Stocks:</strong> Fujifilm Velvia, Fujifilm Provia, Kodak Ektachrome.</li>
          <li><strong>Development:</strong> Processed using E-6 chemistry. Fewer labs process E-6 compared to C-41, and home development is more challenging.</li>
        </ul>
        <Image src="https://placehold.co/600x350.png" alt="Mounted color slide film" width={600} height={350} className="rounded-md shadow-md mx-auto" data-ai-hint="slide film"/>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Film Formats</h2>
        <p className="mb-4">
          Film comes in various sizes (formats):
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>35mm (135 film):</strong> The most common format for beginners and enthusiasts. Comes in rolls, typically giving 24 or 36 exposures.</li>
          <li><strong>Medium Format (120/220 film):</strong> Larger negatives than 35mm, offering higher image quality and less grain. Used in cameras like Hasselblad, Rolleiflex, Mamiya. Different cameras produce different frame sizes on 120 film (e.g., 6x4.5cm, 6x6cm, 6x7cm, 6x9cm).</li>
          <li><strong>Large Format (Sheet Film):</strong> Individual sheets of film (e.g., 4x5 inches, 8x10 inches). Offers the highest image quality and control (e.g., movements for perspective/focus adjustment). Used in view cameras.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-headline mb-4">Film Speed (ISO)</h2>
        <p>
          As covered in the ISO module, films have different sensitivities (ISO ratings). Slower films (ISO 50-200) generally have finer grain and are good for bright light. Faster films (ISO 400-3200) are better for low light or action but have more noticeable grain.
        </p>
      </section>
    </ContentPage>
  );
}
