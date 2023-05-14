import React from "react";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <nav className="bg-zinc-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" passHref>NextJS Firebase Auth</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
