"use client"
import { Card, CardContent, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import cover from "../public/Cover.jpg"
import cover1 from "../public/Cover1.jpg"
import cover2 from "../public/Cover2.jpg"
import {Pridi} from "next/font/google"

const pridi = Pridi({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
})

const covers = [cover, cover1, cover2]


export const Carousel = () => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % covers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [covers.length]);

  const currentProduct = covers[current];


  return (
    <Card className="relative overflow-hidden rounded-lg shadow-md border-gray-300">
        <div className="relative h-80 w-full">
          <Image
            alt="cover"
            src={currentProduct}
            layout="fill"
            objectFit="cover"
            className="transition-opacity durication-500 ease-in-out"
          />
        </div>
      <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <CardTitle className="text-3xl font-bold text-white mb-2"><span className={pridi.className}>Apple Products</span></CardTitle>
      </CardContent>
    </Card>
  );
};
