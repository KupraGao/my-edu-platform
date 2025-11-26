// app/auth/signin/page.tsx
"use client";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-6">Sign In</h1>

      <button
        onClick={() => signIn("google")}
        className="mb-4 px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Sign in with Google
      </button>

      <button
        onClick={() => signIn("facebook")}
        className="px-6 py-3 bg-blue-700 text-white rounded hover:bg-blue-800"
      >
        Sign in with Facebook
      </button>
    </div>
  );
}
