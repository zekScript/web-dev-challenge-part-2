"use server"

import { prisma } from "@/lib/db"
import bcrypt from "bcrypt"
import Cookies from "js-cookie"
import { Jwt } from "jsonwebtoken"

const hashPassword = (password: string) => bcrypt.hash(password, 10)

// const findUserByEmail = (email:string) => {
//     prisma.users.findUnique({where: { email }})
// }


// Create
export async function createUser(formData: FormData) {
    const name = formData.get("username") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string



    

    try {
        const hashedPassword = await hashPassword(password)
        await prisma.users.create({
          data: { name: name, email: email, password: hashedPassword },
        })
        return { success: true, message: 'User created successfully.' }
      } catch (error) {
        return { success: false, message: 'Error creating user.' }
      }


}

// Read (Log in)