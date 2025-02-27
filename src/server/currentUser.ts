import jwt from "jsonwebtoken";
import Cookies from "js-cookie";

export function getCurrentUser() {
  const token = Cookies.get("authToken");
  if (!token) return null;

  try {
    const decoded = jwt.decode(token) as {
      id: number;
      email: string;
      name: string;
      createdAt: Date;
      updatedAt: Date;
    };

    return decoded;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
}
