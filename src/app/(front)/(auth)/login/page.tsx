"use client";
import { useState } from "react";
import { loginUser } from "@/server/user";
import { useRouter } from "next/navigation";

const LogInPage: React.FC = () => {
  const [feedback, setFeedback] = useState({ success: false, message: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const result = await loginUser(formData);
    if (result.success) {
      document.cookie = `authToken=${result.token}; path=/`; // Store token in a cookie
      router.push("/"); // Redirect to home page
    } else {
      setFeedback(result);
    }
  };

  return (
    <>
      <form
        className="w-full max-w-sm"
        action={(formData) => handleSubmit(formData)}
      >
        <input
          type="email"
          placeholder="example@mail.com"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
      {feedback.message && (
        <div
        //   className={`mt-4 w-full rounded-md p-3 text-center ${
        //     feedback.success
        //       ? 'bg-green-100 text-green-700'
        //       : 'bg-red-100 text-red-700'
        //   }`}
        >
          {feedback.message}
        </div>
      )}
    </>
  );
};

export default LogInPage;
