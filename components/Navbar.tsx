// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-100 p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        MyEduPlatform
      </Link>

      <div>
        {!session ? (
          <button
            onClick={() => signIn()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Sign In
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <span>Welcome, {session.user?.name || session.user?.email}</span>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Sign Out
            </button>
            <Link
              href="/dashboard"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Dashboard
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
