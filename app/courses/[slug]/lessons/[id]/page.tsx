// app/courses/[slug]/lessons/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import LessonPlayer from "../../../../../components/LessonPlayer";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";

export default function LessonPage() {
  const { slug, id } = useParams();
  const { data: session, status } = useSession();

  const hasPurchased = false; // later replace with DB check

  const lesson = {
    previewText: "This is a short preview of the lesson.",
    fullText: "This is the full lesson content with all details, images, and video.",
    previewVideo: "/videos/preview.mp4",
    fullVideo: "/videos/full-lesson.mp4",
  };

  // Show a loading state while session is being fetched
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">
        Course: {slug} | Lesson {id}
      </h1>

      {/* If not signed in, show a sign-in prompt */}
      {!session ? (
        <div className="mb-6">
          <p className="mb-4">You must be signed in to view full content.</p>
          <button
            onClick={() => signIn()}
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Sign In
          </button>
        </div>
      ) : (
        <>
          <p className="mb-6">{hasPurchased ? lesson.fullText : lesson.previewText}</p>

          <LessonPlayer
            videoSrc={hasPurchased ? lesson.fullVideo : lesson.previewVideo}
          />

          {!hasPurchased && (
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Buy Lesson / Course
            </button>
          )}
        </>
      )}

      <div className="mt-8">
        <Link href={`/courses/${slug}`} className="text-blue-600 hover:underline">
          ← Back to course
        </Link>
      </div>
    </div>
  );
}
