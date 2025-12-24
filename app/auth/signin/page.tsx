// app/auth/signin/page.tsx
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  // ⚠️ Credentials login ჯერ მხოლოდ UI დონეზეა
  // Backend (Supabase / DB) ჯერ არ არის დაკავშირებული
  async function handleCredentialsLogin(e: React.FormEvent) {
    e.preventDefault();
    alert(
      "📌 UI წარმატებით მუშაობს — Backend მდგომარე ეტაპია. 🔜 Supabase connect"
    );
  }

  // ✅ Google OAuth handler (აუცილებელია App Router-ზე)
  const handleGoogleLogin = async () => {
    await signIn("google", {
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded bg-white p-8 shadow">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Welcome Back
        </h1>

        {/* ⭐ Credentials Login */}
        <form
          onSubmit={handleCredentialsLogin}
          className="mb-8 space-y-4"
        >
          <input
            type="text"
            placeholder="Email or Phone"
            className="w-full rounded border p-3"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded border p-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full rounded bg-blue-600 py-3 text-white hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* ⭐ OAuth Login */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full rounded bg-red-500 py-3 text-white hover:bg-red-600"
          >
            Continue with Google
          </button>
        </div>

        {/* ⭐ Register Redirect */}
        <p className="mt-6 text-center">
          Don&apos;t have an account?{" "}
          <span
            className="cursor-pointer text-blue-600 underline"
            onClick={() => router.push("/auth/register")}
          >
            Create one
          </span>
        </p>
      </div>
    </div>
  );
}
