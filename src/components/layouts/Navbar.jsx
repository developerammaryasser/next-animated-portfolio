"use client";
import { navbar } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "../elements/Button";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
const Navbar = () => {
  const pathname = usePathname();
  // Menu Bar
  const [isNav, setIsNav] = useState(false);

  const toggleNav = () => {
    setIsNav(!isNav);
  };
  return (
    <nav className="h-[5rem] bg-slate-100 border-b relative z-[99]">
      <div className="container h-full flex justify-between items-center ">
        <div>
            <Link href="/" className="text-3xl font-bold text-slate-900">Ammar.</Link>
        </div>
        <div className={`
            flex lg:flex-row justify-between  items-start lg:items-center lg:w-full lg:h-fit lg:relative lg:border-none lg:py-0 lg:bg-transparent lg:left-0 lg:ms-16
            flex-col h-screen w-[70%] md:w-1/2 bg-white border-r absolute top-0 -left-full px-4 py-8 transition-all ${isNav ? "left-0" :"-left-full"}
            `}>
          <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            {navbar.links.map(({ id, name, href }) => (
              <li key={id}>
                <Link
                  href={href}
                  onClick={toggleNav}
                  className={`${
                    pathname === href
                      ? "text-slate-900"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-around gap-x-3">
            {navbar.socials.map(({ id, href, icon }) => (
              <Link key={id} href={href}>
                <Image src={icon} alt="icon" width={20} height={20} />
              </Link>
            ))}
          </div>
        </div>
        <div className="block lg:hidden">
          <Button className="!py-1 px-1">
            {isNav ? (
              <IoCloseOutline size={30} onClick={toggleNav} />
            ) : (
              <IoMenuOutline size={30} onClick={toggleNav} />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
