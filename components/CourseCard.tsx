// components/CourseCard.tsx
import Link from "next/link";
import Image from "next/image";

interface Course {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="block border rounded shadow hover:shadow-lg transition overflow-hidden"
    >
      <div className="relative w-full h-48">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{course.title}</h2>
        <p className="text-gray-700">{course.description}</p>
      </div>
    </Link>
  );
}
