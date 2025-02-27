"use server";

import { prisma } from "@/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Helper function for password hashing
const hashPassword = (password: string) => bcrypt.hash(password, 10);

// Check if user exists by email
const findUserByEmail = (email: string) =>
  prisma.users.findUnique({ where: { email } });

// Create
export async function createUser(formData: FormData) {
  const name = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const hashedPassword = await hashPassword(password);
    await prisma.users.create({
      data: { name: name, email: email, password: hashedPassword },
    });
    return { success: true, message: "User created successfully." };
  } catch (error) {
    return { success: false, message: "Error creating user." };
  }
}

// Read (Log in)

export async function verifyToken(token: string) {
  const secretToken = process.env.SESSION_SECRET as string;
  try {
    return jwt.verify(token, secretToken);
  } catch (error) {
    return null;
  }
}

export async function loginUser(formData: FormData) {
  const secretToken = process.env.SESSION_SECRET as string;
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password)
    return { success: false, message: "Email and password required." };

  const user = await findUserByEmail(email);
  if (!user) return { success: false, message: "Invalid email or password." };

  const isValid = await bcrypt.compare(password, user.password);
  const tokenPayload = {
    id: user.id,
    email: user.email,
    name: user.name,
  };

  const token = jwt.sign(tokenPayload, secretToken);

  return isValid
    ? {
        success: true,
        message: `Login successful! Welcome ${tokenPayload.name}`,
        token,
      }
    : { success: false, message: "Incorrect password." };
}
