"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";

// Types remain the same as your grouping logic
type OrderRow = {
  orderId: string;
  amount: number;
  currency: string;
  status: string;
  createdAt: string;
  productId: string | null;
  productName: string | null;
  productImage: string[] | null;
  price: number | null;
  quantity: number | null;
};

type GroupedOrder = {
  orderId: string;
  amount: number;
  currency: string;
  status: string;
  createdAt: string;
  items: {
    productId: string;
    name: string;
    image?: string;
    price: number;
    quantity: number;
  }[];
};

export default function OrdersList() {
  const [orders, setOrders] = useState<GroupedOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/userprofile/getorders")
      .then((res) => res.json())
      .then((data: OrderRow[]) => {
        const grouped = Object.values(
          data.reduce<Record<string, GroupedOrder>>((acc, row) => {
            if (!acc[row.orderId]) {
              acc[row.orderId] = {
                orderId: row.orderId,
                amount: row.amount,
                currency: row.currency,
                status: row.status,
                createdAt: row.createdAt,
                items: [],
              };
            }
            if (
              row.productId &&
              row.productName &&
              row.price !== null &&
              row.quantity !== null
            ) {
              acc[row.orderId].items.push({
                productId: row.productId,
                name: row.productName,
                image: row.productImage?.[0], // Taking the first image from array
                price: row.price,
                quantity: row.quantity,
              });
            }
            return acc;
          }, {}),
        );
        setOrders(grouped);
        setLoading(false);
      });
  }, []);

  // Helper to handle your specific color requests
  const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case "paid":
        return "bg-green-100 text-green-700 border-green-200 hover:bg-green-100";
      case "cancelled":
        return "bg-red-100 text-red-700 border-red-200 hover:bg-red-100";
      case "failed":
        return "bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-100";
      default:
        return "bg-slate-100 text-slate-700 hover:bg-slate-100";
    }
  };

  if (loading)
    return (
      <div className="p-4 text-center text-muted-foreground">
        Loading your orders...
      </div>
    );
  if (!orders.length)
    return (
      <div className="p-8 text-center border rounded-lg">No orders found.</div>
    );

  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <Card
          key={order.orderId}
          className="overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <CardHeader className="flex flex-row items-center justify-between bg-slate-50/50 py-3">
            <div className="space-y-1">
              <CardTitle className="text-sm font-mono text-slate-500 uppercase">
                ID: {order.orderId}
              </CardTitle>
              <p className="text-xs text-muted-foreground">
                Placed on {format(new Date(order.createdAt), "PPP")}
              </p>
            </div>
            <Badge
              variant="outline"
              className={`${getStatusStyles(order.status)} capitalize px-3`}
            >
              {order.status}
            </Badge>
          </CardHeader>

          <CardContent className="pt-6 space-y-4">
            {order.items.map((item) => (
              <div
                key={item.productId}
                className="flex items-center gap-4 text-sm"
              >
                {/* Product Image Section */}
                <div className="relative h-16 w-16 overflow-hidden rounded-md border bg-slate-50">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-[10px] text-muted-foreground">
                      No Image
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <p className="font-semibold text-slate-800">{item.name}</p>
                  <p className="text-muted-foreground">
                    Qty: {item.quantity} × ₹{item.price}
                  </p>
                </div>

                <p className="font-medium text-slate-900">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            ))}

            <Separator className="my-2" />

            <div className="flex justify-between items-center pt-2">
              <span className="text-muted-foreground text-sm font-medium">
                Order Total
              </span>
              <span className="text-xl font-bold text-slate-900">
                ₹{new Intl.NumberFormat("en-IN").format(order.amount)}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
