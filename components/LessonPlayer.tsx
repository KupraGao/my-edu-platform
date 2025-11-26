// components/LessonPlayer.tsx
interface LessonPlayerProps {
  videoSrc: string;
}

export default function LessonPlayer({ videoSrc }: LessonPlayerProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <video controls className="w-full rounded shadow">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
