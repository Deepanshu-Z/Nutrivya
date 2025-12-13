import db from "@/db/db";
import { cartItems } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { success } from "zod";

export async function PUT(req: Request) {
  const { productId, productQuantity, cartItemId } = await req.json();
  try {
    const response = await db
      .update(cartItems)
      .set({
        quantity: productQuantity,
      })
      .where(
        and(eq(cartItems.id, cartItemId), eq(cartItems.productId, productId))
      );

    return NextResponse.json({ message: "Succesfully updated", success: true });
  } catch (error) {
    return NextResponse.json({
      error,
      message: "Internal server error",
      success: false,
    });
  }
}
