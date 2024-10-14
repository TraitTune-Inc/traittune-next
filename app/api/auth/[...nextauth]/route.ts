import NextAuth, { DefaultSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import clientPromise from "@/app/lib/mongodb"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"]
  }
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const client = await clientPromise;
      const db = client.db("traittune");
      const usersCollection = db.collection("users");

      await usersCollection.updateOne(
        { email: user.email },
        { $set: { 
          name: user.name, 
          email: user.email, 
          image: user.image,
          lastLogin: new Date()
        }},
        { upsert: true }
      );

      return true;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!;
      }
      return session;
    },
  },
})

export { handler as GET, handler as POST }