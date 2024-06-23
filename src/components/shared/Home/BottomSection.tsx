import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function BottomSection() {
  const coffeCardData = [
    {
      text: "Berounová 521, Praha 3",
    Svg: MapPin,
    },
    {
      text: "+420 123 456 789",
    Svg: Phone,
    },
    {
      text: "example@example.example",
    Svg: Mail,
    },
  ]

  return (
    <section className="w-full py-16 text-white flex flex-col justify-center items-center gap-10 pt-48 min-h-screen">
      <h1 className="lg:text-5xl text-2xl sm:text-3xl font-bold font-anton text-center">
        Přijď otestovat naší kávu
      </h1>
      <div className="flex lg:flex-row flex-col items-center justify-between h-full gap-8 w-full">
        <div className="w-full flex items-center justify-center"><Image src="/coffee.png" alt="coffee" width={300} height={300} /></div>
    <Table>
        <TableBody>
    {coffeCardData.map((data) => (
      <TableRow className="hover:bg-transparent" key={data.text}>
        <CoffeCardElement Svg={data.Svg} text={data.text} />
      </TableRow>
    ))}
  </TableBody>
</Table>

      </div>
    </section>
  );
}

function CoffeCardElement({ Svg, text }) {
  return (
      <TableCell className="font-medium flex gap-4 items-center">
        <Svg width={30} height={30} />
        <p>{text}</p> 
      </TableCell>

  );
}
