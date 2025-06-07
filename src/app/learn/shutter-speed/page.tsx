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
        <p className="mb-4">
          Shutter speed is the length of time the camera's shutter remains open when you take a picture. It's one of the three pillars of exposure (along with aperture and ISO). Shutter speed is measured in seconds or fractions of a second (e.g., 1s, 1/2s, 1/60s, 1/250s, 1/1000s).
        </p>
        <p className="mb-4">
          A faster shutter speed means the shutter is open for a shorter duration, letting in less light. A slower shutter speed means the shutter is open longer, letting in more light.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Shutter Speed and Exposure</h2>
        <p className="mb-4">
          Shutter speed directly impacts the brightness of your photo. If your image is too dark (underexposed), you might need a slower shutter speed (or wider aperture/higher ISO). If it's too bright (overexposed), you might need a faster shutter speed (or smaller aperture/lower ISO).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Shutter Speed and Motion</h2>
        <p className="mb-4">
          This is where shutter speed gets really creative:
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-headline mb-2">Freezing Motion (Fast Shutter Speeds)</h3>
            <p>Shutter speeds like 1/250s, 1/500s, 1/1000s, or faster are used to freeze action. This is ideal for sports, wildlife, or any fast-moving subject where you want to capture a crisp, sharp moment.</p>
            <Image src="https://placehold.co/600x350.png" alt="Frozen motion photograph" width={600} height={350} className="rounded-md shadow-md mt-3 mx-auto" data-ai-hint="frozen action"/>
          </div>
          <div>
            <h3 className="text-2xl font-headline mb-2">Showing Motion / Motion Blur (Slow Shutter Speeds)</h3>
            <p>Shutter speeds like 1/30s, 1/15s, 1s, or longer can create motion blur. This can be used creatively to show the movement of water (silky smooth waterfalls), light trails from cars at night, or to imply speed in a subject while keeping the background sharp (panning).</p>
            <Image src="https://placehold.co/600x350.png" alt="Motion blur photograph" width={600} height={350} className="rounded-md shadow-md mt-3 mx-auto" data-ai-hint="waterfall motion"/>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Camera Shake and Tripods</h2>
        <p className="mb-4">
          When using slower shutter speeds, camera shake becomes a risk. Any movement of the camera while the shutter is open can result in a blurry image. A general rule of thumb for handheld shooting is to use a shutter speed at least as fast as the reciprocal of your focal length (e.g., for a 50mm lens, use 1/50s or faster; for a 200mm lens, use 1/200s or faster).
        </p>
        <p>
          For very slow shutter speeds (typically anything slower than 1/30s, or even slower with longer lenses), a tripod is essential to keep the camera steady and ensure sharp images.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-headline mb-4">Shutter Speed Dial</h2>
        <p>
          Most film cameras have a shutter speed dial, usually on the top plate. It allows you to select your desired shutter speed. Some cameras also have a "B" (Bulb) setting, where the shutter stays open for as long as you hold the shutter button down, and "T" (Time) where it opens on one press and closes on another (less common). These are used for very long exposures.
        </p>
      </section>
    </ContentPage>
  );
}
