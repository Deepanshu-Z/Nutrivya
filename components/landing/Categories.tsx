"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Categories() {
  const categories = [
    {
      name: "Health & Fitness",
      image: "/categories/shoes.jpg",
    },
    {
      name: "Performance",
      image: "/categories/wallets.jpg",
    },
    {
      name: "Skin",
      image: "/categories/accessories.jpg",
    },
    {
      name: "Hygiene",
      image: "/categories/bags.jpg",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {/* Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold tracking-tight">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our premium collection across categories.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((item, idx) => (
            <Card
              key={idx}
              className="rounded-2xl border hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative w-full h-56 overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 text-center space-y-2">
                  <h3 className="font-semibold text-xl">{item.name}</h3>
                  <Button variant="outline" className="rounded-full mt-2 px-6">
                    Explore
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
