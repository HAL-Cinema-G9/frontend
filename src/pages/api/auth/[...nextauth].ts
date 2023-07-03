import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import axios from 'axios';

type ClientType = {
  clientId: string;
  clientSecret: string;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    } as ClientType),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      const provider = account?.provider;
      const uid = account?.sub;
      const name = user.name;
      const email = user.email;

      try {
        const response = await axios.post(
          `${apiUrl}/auth/${provider}/callback`,
          {
            provider,
            uid,
            name,
            email,
          }
        );

        if (response.status === 200) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log('エラー', error);
        return false;
      }
    },
  },
};

export default NextAuth(authOptions);
