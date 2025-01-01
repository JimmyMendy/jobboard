import bcrypt from 'bcryptjs';
import { connectToDatabase } from '@/app/lib/db';
import User from '@/app/models/User';

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    await connectToDatabase()

    const existingUser = await User.findOne({ email });
    if(existingUser) {
      return res.status(400).json({ message: "User already exists" })
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({ name, email, password: hashedPassword });

    return res.status(201).json({ message: "User created successfully", user: newUser})
  }

  res.status(405).json({ message: "Method not allowed" });
}