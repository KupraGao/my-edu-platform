// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

/*
  ✅ აუცილებელია Vercel + App Router + OAuth შემთხვევაში
  თორემ Production-ზე OAuth flow წყდება (refresh ხდება)
*/
export const runtime = "nodejs";

export const authOptions = {
  /*
    ✅ მთავარი გასწორება
    ეუბნება NextAuth-ს, რომ ენდოს request-ის host-ს
    (Vercel production გარემოში აუცილებელია)
  */
  trustHost: true,

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  session: {
    strategy: "jwt" as const,
  },

  pages: {
    signIn: "/auth/signin",
  },

  callbacks: {
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      // relative URL (მაგ. /dashboard)
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`;
      }

      // same-origin URL
      if (new URL(url).origin === baseUrl) {
        return url;
      }

      // fallback
      return baseUrl;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
