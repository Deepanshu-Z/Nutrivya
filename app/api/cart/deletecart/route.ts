import db from "@/db/db";
import { cartItems } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { success } from "zod";

export async function DELETE(req: Request) {
  const { cartItemId, productId } = await req.json();
  try {
    const response = await db
      .delete(cartItems)
      .where(
        and(
          eq(cartItems.cartId, cartItemId),
          eq(cartItems.productId, productId)
        )
      );
    const remaining = await db
      .select()
      .from(cartItems)
      .where(eq(cartItems.cartId, cartItemId));

    if (remaining.length === 0) {
      await db.delete(cartItems).where(cartItems.id, cartItemId);
    }
    return NextResponse.json({
      message: "Succesfully removed product from cart",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      error,
      message: "Error removing product from cart: Internal server error",
      success: true,
    });
  }
}
