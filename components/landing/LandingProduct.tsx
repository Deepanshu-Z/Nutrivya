"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function LandingProduct() {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
        {/* LEFT: CONTENT */}
        <div className="space-y-6">
          <Badge variant="secondary" className="px-3 py-1 w-fit">
            Best Seller 2025
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Experience Premium Comfort With Our Leather Shoes
          </h1>

          <p className="text-lg text-muted-foreground max-w-md">
            Designed for everyday use — lightweight, durable, and handcrafted
            with 100% real leather. Made to elevate your lifestyle.
          </p>

          <div className="flex gap-4">
            <Link href="/shop">
              <Button size="lg">Shop Now</Button>
            </Link>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>

        {/* RIGHT: PRODUCT IMAGE */}
        <Card className="shadow-xl rounded-2xl overflow-hidden">
          <CardContent className="p-0">
            <Image
              src="/sample-product.jpg"
              alt="Product"
              width={600}
              height={500}
              className="w-full h-full object-cover"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
