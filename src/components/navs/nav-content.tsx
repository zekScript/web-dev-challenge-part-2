"use client";
import { getCurrentUser } from "@/server/currentUser";
import Link from "next/link";
import Cookies from "js-cookie";

const NavContent: React.FC = () => {
  const user = getCurrentUser();
  const isLoggedIn = Cookies.get("authToken") ? true : false;
  const deletCookie = () => {
    Cookies.remove("authToken");
    window.location.reload();
  };

  console.log(user?.name);

  return (
    <>
      <div className="ml-5 w-full flex flex-row gap-5">
        {!isLoggedIn ? (
          <div className=" w-full gap-5">
            <Link href="/login">Log in</Link>
            <Link href="/signin">Sign in</Link>
          </div>
        ) : (
          <>
            <p>{user?.name}</p>
            <button onClick={deletCookie}>Log out</button>
          </>
        )}
      </div>
      <ul className="mr-5">
        <Link href="/cart">Cart</Link>
      </ul>
    </>
  );
};

export default NavContent;
