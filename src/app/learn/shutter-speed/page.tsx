import ContentPage from '@/components/ContentPage';
import Image from 'next/image';

export default function ShutterSpeedPage() {
  return (
    <ContentPage 
      title="Understanding Shutter Speed"
      description="Learn how shutter speed controls exposure and motion in your photographs."
      mainImage={{src: "https://placehold.co/800x400.png", alt: "Camera shutter mechanism", aiHint: "camera shutter"}}
    >
      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">What is Shutter Speed?</h2>
        <p className="mb-2">
          <b>Shutter speed</b> is the <b>length of time the camera's shutter remains open</b> when you take a picture. It's one of the <b>three pillars of exposure</b> (along with aperture and ISO). Shutter speed is measured in <b>seconds or fractions of a second</b> (e.g., 1s, 1/2s, 1/60s, 1/250s, 1/1000s).
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>A <b>faster shutter speed</b> means the shutter is open for a <b>shorter duration, letting in less light</b>.</li>
            <li>A <b>slower shutter speed</b> means the shutter is open <b>longer, letting in more light</b>.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Shutter Speed and Exposure</h2>
        <p className="mb-4">
          Shutter speed directly impacts the <b>brightness of your photo</b>. If your image is too dark (underexposed), you might need a slower shutter speed (or wider aperture/higher ISO). If it's too bright (overexposed), you might need a faster shutter speed (or smaller aperture/lower ISO).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Shutter Speed and Motion</h2>
        <p className="mb-2">
          This is where shutter speed gets really creative:
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-headline mb-2">Freezing Motion (Fast Shutter Speeds)</h3>
            <p>Shutter speeds like 1/250s, 1/500s, 1/1000s, or faster are used to <b>freeze action</b>. This is ideal for sports, wildlife, or any fast-moving subject where you want to capture a <b>crisp, sharp moment</b>.</p>
            <Image src="https://placehold.co/600x350.png" alt="Frozen motion photograph" width={600} height={350} className="rounded-md shadow-md mt-3 mx-auto" data-ai-hint="frozen action"/>
          </div>
          <div>
            <h3 className="text-2xl font-headline mb-2">Showing Motion / Motion Blur (Slow Shutter Speeds)</h3>
            <p className="mb-2">Shutter speeds like 1/30s, 1/15s, 1s, or longer can create <b>motion blur</b>. This can be used creatively to: </p>
            <ul className="list-disc pl-6 space-y-1">
                <li>Show the <b>movement of water</b> (silky smooth waterfalls).</li>
                <li>Create <b>light trails</b> from cars at night.</li>
                <li><b>Imply speed</b> in a subject while keeping the background sharp (<b>panning</b>).</li>
            </ul>
            <Image src="https://placehold.co/600x350.png" alt="Motion blur photograph" width={600} height={350} className="rounded-md shadow-md mt-3 mx-auto" data-ai-hint="waterfall motion"/>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Camera Shake and Tripods</h2>
        <p className="mb-4">
          When using <b>slower shutter speeds</b>, <b>camera shake</b> becomes a risk. Any movement of the camera while the shutter is open can result in a <b>blurry image</b>. A general rule of thumb for handheld shooting is to use a shutter speed at least as fast as the <b>reciprocal of your focal length</b> (e.g., for a 50mm lens, use 1/50s or faster; for a 200mm lens, use 1/200s or faster).
        </p>
        <p>
          For very slow shutter speeds (typically anything slower than 1/30s, or even slower with longer lenses), a <b>tripod is essential</b> to keep the camera steady and ensure sharp images.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-headline mb-4">Shutter Speed Dial</h2>
        <p className="mb-2">
          Most film cameras have a <b>shutter speed dial</b>, usually on the top plate. It allows you to select your desired shutter speed. Some cameras also have special settings:
        </p>
        <ul className="list-disc pl-6 space-y-1">
            <li><b>"B" (Bulb)</b> setting: The <b>shutter stays open</b> for as long as you hold the shutter button down.</li>
            <li><b>"T" (Time)</b> setting: The shutter opens on one press and closes on another (less common).</li>
        </ul>
        <p className="mt-2">These are used for very long exposures.</p>
      </section>
    </ContentPage>
  );
}
