// app/courses/[slug]/page.tsx
"use client";
import { useParams } from "next/navigation";

export default function CoursePage() {
  const { slug } = useParams();

  const hasPurchased = false; // toggle to test full content

  // Hardcoded course and lessons for testing
  const course = {
    title: slug === "react-basics" ? "React Basics" : "Advanced TypeScript",
    previewDescription:
      "This is a preview description. Only part of the course is visible.",
    fullDescription:
      "This is the full course description. It includes all text, images, and video content.",
    previewVideo: "/videos/preview.mp4",
    fullVideo: "/videos/full-lesson.mp4",
  };

  const lessons = [
    { id: "1", title: "Introduction" },
    { id: "2", title: "Components & Props" },
    { id: "3", title: "State & Effects" },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>

      <p className="mb-6">
        {hasPurchased ? course.fullDescription : course.previewDescription}
      </p>

      <div className="mb-6">
        <video
          controls
          className="w-full max-w-2xl rounded shadow"
          src={hasPurchased ? course.fullVideo : course.previewVideo}
        />
      </div>

      <h2 className="text-2xl font-semibold mb-2">Lessons:</h2>
      <ul className="mb-6 space-y-2">
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <a
              href={`/courses/${slug}/lessons/${lesson.id}`}
              className="text-blue-600 hover:underline"
            >
              {lesson.title}
            </a>
          </li>
        ))}
      </ul>

      {!hasPurchased && (
        <button
          onClick={async () => {
            const res = await fetch("/api/checkout", { method: "POST" });
            const data = await res.json();
            alert(data.message);
          }}
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Buy Course
        </button>
      )}
    </div>
  );
}
