import NextAuth, { DefaultSession, User, Account, Profile, Session } from "next-auth"
import { JWT } from "next-auth/jwt"
import GoogleProvider from "next-auth/providers/google"
import clientPromise from "@/app/lib/mongodb"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"]
  }
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }: { user: User; account: Account | null; profile?: Profile }): Promise<boolean> {
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
    async session({ session, token }: { session: Session; token: JWT }): Promise<Session> {
      if (session.user) {
        session.user.id = token.sub!;
      }
      return session;
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }