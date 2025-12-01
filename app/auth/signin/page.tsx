// app/auth/signin/page.tsx
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleCredentialsLogin(e: any) {
    e.preventDefault();
    alert("⚠️ Email/Password შესვლა UI რეჟიმშია — DB ჯერ არ გვაქვს");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Sign In</h1>

      {/* ⭐ Email + Password Login */}
      <form onSubmit={handleCredentialsLogin} className="w-full max-w-sm space-y-4 mb-8">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>

      {/* ⭐ OAuth Buttons */}
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

      {/* ⭐ Register Redirect */}
      <p
        className="mt-6 text-blue-600 underline cursor-pointer"
        onClick={() => router.push("/auth/register")}
      >
        Don't have an account? Create new one
      </p>
    </div>
  );
}
