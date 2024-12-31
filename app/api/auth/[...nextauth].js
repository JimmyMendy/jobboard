import NextAuth from "next-auth/next";
import { CredentialsProvider } from "next-auth/providers";
import bcrypt from 'bcryptjs';
import { connectToDatabase } from "@/app/lib/db";
import User from "@/app/models/User";

export default NextAuth({
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials) {
        await connectToDatabase();

        const user = await User.findOne({ email: credentials.email});
        if (!user) throw new Error("No user found");


        const isValidPassord = await bcrypt.compare(credentials.password);
        if (!isValidPassord) throw new Error("Invalid credentials")

          return { email: user.email, name: user.name };
      }
    })
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout"
  },
  secret: processEnv.env.NEXTAUTH_SECRET,
})