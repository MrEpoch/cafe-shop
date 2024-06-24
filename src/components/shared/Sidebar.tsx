import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ children }) {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent
        className="bg-cafe-secondary border-0 text-white w-80"
        side="left"
      >
        <SheetHeader>
          <SheetTitle>
            <div className="flex gap-1 justify-center items-center">
              <Image src="/logo.svg" alt="logo" width={30} height={30} />
              <p className="text-xl font-bold font-playwrite text-white">
                KoffeeZila
              </p>
            </div>
          </SheetTitle>
          <SheetDescription className="py-8">
            <div className="flex flex-col gap-4 text-white">
              <Link className="hover:underline font-poppins text-md" href="/">
                Domů
              </Link>
              <Link
                className="hover:underline font-poppins text-md"
                href="/about"
              >
                O Nás
              </Link>
              <Link
                className="hover:underline font-poppins text-md"
                href="/catalog"
              >
                Katalog
              </Link>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
