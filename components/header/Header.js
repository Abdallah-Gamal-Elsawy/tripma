"use client";
import Image from "next/image";
import classes from "./Header.module.css";
import Logo from "../../public/logo.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Signup from "../../app/signUp/page";
import Signin from "../../app/Signin/page";
import Link from "next/link";
function Header() {
  const [isOpenSignup, setIsOpenSignup] = useState(false);
  const [isOpenSignin, setIsOpenSignin] = useState(false);

  return (
    <div className="flex justify-between py-1 px-6 items-center">
      <Link href={"/"}>
        <Image src={Logo} alt="" width={107} height={30} />
      </Link>
      <nav className="flex gap-4 p-4 items-center">
        <ul className="flex gap-4 items-center">
          <li className="text-primary_background font-normal  font-sans">
            <button>Flights</button>
          </li>
          <li className="text-nav_list_item font-normal  font-sans">
            <Link href={"/Hotels"}>Hotels</Link>
          </li>
          <li className="text-nav_list_item font-normal  font-sans">
            <button>packages</button>
          </li>
          <li className="text-nav_list_item font-normal  font-sans">
            <button onClick={() => setIsOpenSignin(true)}>Sign In</button>
          </li>
        </ul>
        <button
          className={classes.signup_button}
          onClick={() => setIsOpenSignup(true)}
        >
          Sign up
        </button>
        <Signup show={isOpenSignup} onClose={() => setIsOpenSignup(false)} />
        <Signin show={isOpenSignin} onClose={() => setIsOpenSignin(false)} />
      </nav>
    </div>
  );
}

export default Header;
