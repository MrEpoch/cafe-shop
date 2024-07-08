import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function BottomSection({ notTitle = false }) {
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
  ];

  return (
    <section className="w-full py-16 text-white flex flex-col justify-center items-center gap-10 pt-48 min-h-screen">
      {!notTitle && (
        <h1 className="lg:text-5xl sm:text-4xl text-3xl leading-snug font-bold font-anton text-center">
          Přijď otestovat naší kávu
        </h1>
      )}
      <div className="flex lg:flex-row flex-col items-center justify-between h-full gap-8 w-full">
        <div className="w-full flex items-center justify-center">
          <Image
            src="/fresh-coffe.jpg"
            alt="coffee"
            width={400}
            height={400}
            className="rounded-md object-cover"
          />
        </div>
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

function CoffeCardElement({ Svg, text }: any) {
  return (
    <TableCell className="font-medium flex gap-4 items-center">
      <Svg width={30} height={30} />
      <p>{text}</p>
    </TableCell>
  );
}
