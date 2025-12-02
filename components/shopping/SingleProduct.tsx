"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SingleProduct() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* PRODUCT IMAGES + INFO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT: PRODUCT IMAGE */}
        <Card className="overflow-hidden rounded-xl">
          <CardContent className="p-0">
            <Image
              src="/sample-product.jpg"
              alt="Product Image"
              width={600}
              height={500}
              className="object-cover w-full h-full"
            />
          </CardContent>
        </Card>

        {/* RIGHT: INFO */}
        <div className="space-y-4">
          <Badge variant="secondary">New Arrival</Badge>

          <h1 className="text-3xl font-bold">Premium Leather Shoes</h1>

          <p className="text-muted-foreground">
            High-quality handcrafted leather shoes designed for comfort and
            style.
          </p>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold">₹2,499</span>
            <span className="line-through text-muted-foreground">₹3,499</span>
          </div>

          <Separator />

          <div className="space-y-3">
            <Button className="w-full">Add to Cart</Button>
            <Button variant="outline" className="w-full">
              Buy Now
            </Button>
          </div>
        </div>
      </div>

      {/* PRODUCT DETAILS */}
      <div className="mt-12">
        <Tabs defaultValue="description">
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          {/* DESCRIPTION */}
          <TabsContent value="description">
            <Card className="p-5">
              <p className="text-muted-foreground leading-relaxed">
                These premium leather shoes are crafted using top-grain leather
                with soft inner padding, delivering long-lasting comfort for
                daily wear.
              </p>
            </Card>
          </TabsContent>

          {/* SPECIFICATIONS */}
          <TabsContent value="specs">
            <Card className="p-5 space-y-2">
              <p>
                <strong>Material:</strong> 100% Leather
              </p>
              <p>
                <strong>Color:</strong> Brown
              </p>
              <p>
                <strong>Weight:</strong> 350g
              </p>
              <p>
                <strong>Warranty:</strong> 6 Months
              </p>
            </Card>
          </TabsContent>

          {/* FAQ */}
          <TabsContent value="faq">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is the shoe waterproof?</AccordionTrigger>
                <AccordionContent>
                  Yes, the leather is water-resistant for mild conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Is there a return policy?</AccordionTrigger>
                <AccordionContent>
                  7-day replacement available for manufacturing defects.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
