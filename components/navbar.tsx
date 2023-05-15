import React from "react";
import Link from "next/link";
import { useAuth } from "context/AuthContext";
import { useRouter } from "next/router";

type Props = {};

const Navbar = (props: Props) => {
  const { user, signup, login, logout } = useAuth();
  const router = useRouter();
  return (
    <>
      <nav className="bg-zinc-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" passHref>
            NextJS Firebase Auth
          </Link>
        </div>
        <div>
          {user ? (
            <div
              onClick={() => {
                logout();
                router.push("/login");
              }}
            >
              Logout
            </div>
          ) : (
            <>
              <Link href="/signup">Signup</Link>
              <Link href="/login">Login</Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
