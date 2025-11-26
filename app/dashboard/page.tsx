// app/dashboard/page.tsx
"use client";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) return <p>Please sign in to see your dashboard.</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome, {session.user?.name}</h1>
      <p>Email: {session.user?.email}</p>
      <p>This is your customer dashboard.</p>
    </div>
  );
}
