"use client"
import { createUser } from "@/server/user";
import { useState } from "react";


const SignIn: React.FC = () => {

    const [feedback, setFeedback] = useState({success: false, message: ""})

    const handleSubmit = async (formData: FormData) => {
        const result = await createUser(formData)
        setFeedback(result)
      }


    return(
        <>
        <div >
        <h1>Create account</h1>
        {/* action={} */}
        <form action={(formData) => handleSubmit(formData)}  className="flex flex-col mt-12 justify-center">
        <label>Username</label>
        <input placeholder="username" name="username" type="text"></input>
        <label>email</label>
        <input placeholder="email" type="email" name="email"></input>
        <label>Password</label>
        <input placeholder="1234" type="password" name="password"></input>
        <button className="bg-neutral-500 flex text-white">Send data</button>
        </form>
        </div>
        
        
        
        </>
    )
}


export default SignIn;