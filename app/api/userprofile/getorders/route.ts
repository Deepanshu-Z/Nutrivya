import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import db from "@/db/db";
import { eq, desc } from "drizzle-orm";
import { orders, orderItems, products } from "@/db/schema";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    //@ts-ignore
    const id = session?.user?.id;
    if (!id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const result = await db
      .select({
        orderId: orders.order_id,
        amount: orders.amount,
        currency: orders.currency,
        status: orders.order_status,
        createdAt: orders.createdAt,

        productId: products.id,
        productName: products.name,
        productImage: products.galleryImages,
        price: orderItems.price,
        quantity: orderItems.quantity,
      })
      .from(orders)
      .leftJoin(orderItems, eq(orderItems.order_id, orders.order_id))
      .leftJoin(products, eq(products.id, orderItems.product_id))
      .where(eq(orders.user_id, id))
      .orderBy(desc(orders.createdAt));

    return NextResponse.json(result);
  } catch (error) {
    console.error("FETCH_ORDERS_ERROR", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
