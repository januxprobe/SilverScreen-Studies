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
          The classic choice for many film photographers, especially beginners. B&W negative film produces a <b>negative image</b> (lights appear dark, darks appear light) which is then reversed during printing or scanning.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li><b>Characteristics:</b> Known for its <b>tonal range</b>, <b>contrast control</b> (influenced by film choice, exposure, and development), and distinct <b>grain structure</b>.</li>
          <li><b>Popular Stocks:</b> Ilford HP5 Plus, Kodak Tri-X 400, Kodak T-MAX, Fomapan, Kentmere.</li>
          <li><b>Development:</b> Relatively straightforward to develop at home or by labs using <b>standard B&W chemistry</b>.</li>
        </ul>
        <Image src="https://placehold.co/600x350.png" alt="Black and white film negative strip" width={600} height={350} className="rounded-md shadow-md mx-auto" data-ai-hint="negative strip"/>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Color Negative Film (C-41)</h2>
        <p className="mb-4">
          The most common type of color film. It produces a <b>negative image</b> with an <b>orange mask</b> (to help with color correction during printing).
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li><b>Characteristics:</b> Generally offers good <b>exposure latitude</b> (forgiving of minor over/underexposure), a range of <b>color palettes</b> (some films are more saturated, others more muted or warmer/cooler).</li>
          <li><b>Popular Stocks:</b> Kodak Portra (400, 160, 800), Kodak Gold 200, Kodak ColorPlus 200, Fujifilm Superia X-TRA 400, Cinestill 800T.</li>
          <li><b>Development:</b> Processed using <b>C-41 chemistry</b>, which is standardized and widely available at labs. Home development is possible but more complex than B&W.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Color Reversal Film / Slide Film (E-6)</h2>
        <p className="mb-4">
          Also known as <b>slide film</b>, this type produces a <b>positive image</b> directly on the film. When you hold it up to the light, you see the image as it will appear. Slides are often mounted for projection.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li><b>Characteristics:</b> Known for <b>vibrant colors</b>, <b>high contrast</b>, and <b>fine grain</b>. <b>Less exposure latitude</b> than color negative film, so exposure needs to be very accurate.</li>
          <li><b>Popular Stocks:</b> Fujifilm Velvia, Fujifilm Provia, Kodak Ektachrome.</li>
          <li><b>Development:</b> Processed using <b>E-6 chemistry</b>. Fewer labs process E-6 compared to C-41, and home development is more challenging.</li>
        </ul>
        <Image src="https://placehold.co/600x350.png" alt="Mounted color slide film" width={600} height={350} className="rounded-md shadow-md mx-auto" data-ai-hint="slide film"/>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Film Formats</h2>
        <p className="mb-4">
          Film comes in various sizes (formats):
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><b>35mm (135 film):</b> The <b>most common</b> format for beginners and enthusiasts. Comes in rolls, typically giving <b>24 or 36 exposures</b>.</li>
          <li><b>Medium Format (120/220 film):</b> <b>Larger negatives</b> than 35mm, offering <b>higher image quality</b> and <b>less grain</b>. Used in cameras like Hasselblad, Rolleiflex, Mamiya. Different cameras produce different frame sizes on 120 film (e.g., 6x4.5cm, 6x6cm, 6x7cm, 6x9cm).</li>
          <li><b>Large Format (Sheet Film):</b> <b>Individual sheets</b> of film (e.g., 4x5 inches, 8x10 inches). Offers the <b>highest image quality</b> and <b>control</b> (e.g., movements for perspective/focus adjustment). Used in view cameras.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-headline mb-4">Film Speed (ISO)</h2>
        <p>
          As covered in the ISO module, films have different <b>sensitivities (ISO ratings)</b>. <b>Slower films (ISO 50-200)</b> generally have <b>finer grain</b> and are good for <b>bright light</b>. <b>Faster films (ISO 400-3200)</b> are better for <b>low light or action</b> but have <b>more noticeable grain</b>.
        </p>
      </section>
    </ContentPage>
  );
}
