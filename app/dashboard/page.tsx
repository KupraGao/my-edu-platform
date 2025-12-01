// app/dashboard/page.tsx
"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Dashboard() {
  const { data: session, status } = useSession();

  // Loader state while session is being fetched
  if (status === "loading") {
    return <p className="text-center p-10 text-lg">Loading dashboard...</p>;
  }

  // Redirect UI if user is not signed in
  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-xl mb-4">You must sign in to access your dashboard.</p>
        <Link
          href="/auth/signin"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Top welcome card */}
      <div className="max-w-4xl bg-white mx-auto p-8 rounded-lg shadow">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Welcome, {session.user?.name || session.user?.email}
            </h1>
            <p className="text-gray-600">
              Manage your learning experience from your personal dashboard.
            </p>
          </div>

          {/* Sign Out button */}
          <button
            onClick={() => signOut()}
            className="px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Dashboard sections */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Each card is a section placeholder until DB integration */}
        <DashboardCard
          title="My Courses"
          description="View courses you are enrolled in and continue learning."
          link="/courses"
          buttonText="Continue Learning"
        />

        <DashboardCard
          title="Progress & Achievements"
          description="Track your learning progress, badges and completed lessons."
          link="#"
          buttonText="View Progress"
        />

        <DashboardCard
          title="Profile Settings"
          description="Edit your personal information, password and account data."
          link="#"
          buttonText="Manage Profile"
        />

        <DashboardCard
          title="Payment History"
          description="Review purchases, invoices and course transactions."
          link="#"
          buttonText="View Payments"
        />

        <DashboardCard
          title="Notifications"
          description="Messages and alerts from instructors and the platform."
          link="#"
          buttonText="Check Notifications"
        />

        <DashboardCard
          title="Support"
          description="Get help from our support team or visit FAQ."
          link="/contact"
          buttonText="Contact Support"
        />
      </div>
    </div>
  );
}

/* 🔹 Reusable Card Component for Dashboard UI
   — იყენებს props-ებს რათა ერთი და იგივე დიზაინი სხვადასხვა ბლოკში გამოვიყენოთ
*/
function DashboardCard({
  title,
  description,
  link,
  buttonText,
}: {
  title: string;
  description: string;
  link: string;
  buttonText: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href={link}
        className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {buttonText}
      </Link>
    </div>
  );
}
