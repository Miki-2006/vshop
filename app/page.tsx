import { Carousel } from "@/components/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {Pridi} from "next/font/google"
import cover from "../public/Cover.jpg"

const pridi = Pridi({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {

  return (
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Welcome to <span className={pridi.className}>Vshop</span>!
            </h2>
            <p className="text-neutral-600">
              Discover the Apple products.
            </p>
            <Button asChild variant="default" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white">
              <Link className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white" href="/products">Browse All Products</Link>
            </Button>
          </div>
          <Image
            alt="product image"
            width={450}
            height={450}
            className="rounded"
            src={cover}
          />
        </div>
      </section>
      <section className="py-8">
        <Carousel />
      </section>
    </div>
  );
}
