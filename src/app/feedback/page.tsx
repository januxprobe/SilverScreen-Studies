import PhotoUploadForm from '@/components/PhotoUploadForm';

export default function FeedbackPage() {
  return (
    <div>
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-headline font-bold mb-3">AI Powered Photo Feedback</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Upload your film photograph and let our AI provide you with constructive feedback to help you improve your skills.
          This tool analyzes aspects like composition, exposure, and potential improvements.
        </p>
      </header>
      <PhotoUploadForm />
    </div>
  );
}
