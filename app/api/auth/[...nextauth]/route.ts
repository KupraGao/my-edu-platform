// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// ❌ FacebookProvider დროებით ამოვიღეთ,
// რადგან FACEBOOK_CLIENT_ID / SECRET env-ები არ გაქვს.
// ეს იწვევდა OAuth flow-ის ჩუმად ჩავარდნას.
// import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      // ✅ ეს სწორია — env-ები უკვე გაქვს დამატებული Vercel-ზე
    }),

    /*
    ❌ FacebookProvider დროებით გამორთულია
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    */
  ],

  session: {
    strategy: "jwt" as const,
    // ✅ ეს სწორია — stateless session JWT-ით
  },

  pages: {
    signIn: "/auth/signin",
    // ✅ სწორად უთითებ custom sign-in გვერდს
  },

  callbacks: {
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      /*
        ❌ ადრე გქონდა:
        redirect() { return "/dashboard"; }

        ეს OAuth callback-ს არღვევდა Production-ზე.

        ✅ ახალი ვერსია:
        - საშუალებას აძლევს NextAuth-ს უსაფრთხოდ დაამუშაოს
          Google → callback → redirect flow
      */

      // თუ relative URL-ია (/dashboard)
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`;
      }

      // თუ იგივე origin-იდან მოდის
      if (new URL(url).origin === baseUrl) {
        return url;
      }

      // სხვა შემთხვევაში აბრუნებს baseUrl-ს
      return baseUrl;
    },
  },
};

const handler = NextAuth(authOptions);

// ✅ App Router-ისთვის აუცილებელია GET და POST export
export { handler as GET, handler as POST };
