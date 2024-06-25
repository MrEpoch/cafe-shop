import Image from "next/image";
import Link from "next/link";
import React from "react";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full flex flex-col h-full">
      <div className="h-full w-full bg-cafe-secondary">
        <nav className="w-full px-16 max-w-screen-xl mx-auto relative h-16 text-white flex items-center justify-between">
          <Link href="/" className="flex gap-1 items-center">
            <Image src="/logo.svg" alt="logo" width={30} height={30} />
            <p className="text-xl font-bold font-playwrite">KoffeeZila</p>
          </Link>
          <div className="hidden sm:flex gap-4 items-center">
            <Link className="hover:underline font-poppins" href="/">
              Domů
            </Link>
            <Link className="hover:underline font-poppins" href="/about">
              O Nás
            </Link>
            <Link className="hover:underline font-poppins" href="/catalog">
              Katalog
            </Link>
          </div>
          <div className="sm:hidden">
            <Sidebar>
              <Menu className="w-6 h-6" />
            </Sidebar>
          </div>
        </nav>
      </div>
      <div className="relative h-48">
        <div className="custom-shape-divider-top-1719069632">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
