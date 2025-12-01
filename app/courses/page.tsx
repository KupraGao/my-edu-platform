// app/courses/page.tsx
import CourseCard from "../../components/CourseCard";

const courses = [
  {
    slug: "react-basics",
    title: "React Basics",
    description: "Learn React fundamentals and build your first app.",
    image: "/images/react-course.jpg",
  },
  {
    slug: "typescript-advanced",
    title: "Advanced TypeScript",
    description: "Deep dive into TypeScript features and generics.",
    image: "/images/ts-course.jpg",
  },
];

export default function CoursesPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">ყველა კურსი</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}
