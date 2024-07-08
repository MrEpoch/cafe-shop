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
import { Book, Coffee, Home } from "lucide-react";

export default function Sidebar({ children }: any) {
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
              <Link
                className="hover:underline flex items-center justify-start gap-4 font-poppins text-md pl-8"
                href="/"
              >
                <Home className="w-4 h-4" />
                <span>Domů</span>
              </Link>
              <Link
                className="hover:underline font-poppins text-md flex items-center justify-start gap-4 pl-8"
                href="/about"
              >
                <Book className="w-4 h-4" />
                <span>O Nás</span>
              </Link>
              <Link
                className="hover:underline font-poppins text-md flex items-center justify-start pl-8 gap-4"
                href="/catalog"
              >
                <Coffee className="w-4 h-4" />
                <span>Katalog</span>
              </Link>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
