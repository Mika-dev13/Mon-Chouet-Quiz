import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import GoogleProvider from 'next-auth/providers/google';

const prisma = new PrismaClient();

const googleClient = process.env.GOOGLE_CLIENT_ID;
const googleSecret = process.env.GOOGLE_CLIENT_SECRET;

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: googleClient ?? '',
      clientSecret: googleSecret ?? '',
      profile(profile) {
        return {
          role: profile.role ?? 'USER',
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user.role = user.role;
      return session;
    },
  },
});

export default NextAuth;
