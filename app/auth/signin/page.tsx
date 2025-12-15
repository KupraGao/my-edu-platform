// app/auth/signin/page.tsx
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  async function handleCredentialsLogin(e: any) {
    e.preventDefault();
    alert("📌 UI წარმატებით მუშაობს — Backend მდგომარე ეტაპია. 🔜 Supabase connect");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome Back</h1>

        {/* ⭐ Credentials Login */}
        <form onSubmit={handleCredentialsLogin} className="space-y-4 mb-8">
          <input
            type="text"
            placeholder="Email or Phone"
            className="w-full p-3 border rounded"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
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
            className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* ⭐ OAuth Login */}
        <div className="space-y-3">
          <button
            onClick={() => signIn("google")}
            className="w-full py-3 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Continue with Google
          </button>

          <button
            onClick={() => signIn("facebook")}
            className="w-full py-3 bg-blue-700 text-white rounded hover:bg-blue-800"
          >
            Continue with Facebook
          </button>
        </div>

        {/* ⭐ Register Redirect */}
        <p className="text-center mt-6">
          Don't have an account?{" "}
          <span
            className="text-blue-600 underline cursor-pointer"
            onClick={() => router.push("/auth/register")}
          >
            Create one
          </span>
        </p>
      </div>
    </div>
  );
}
