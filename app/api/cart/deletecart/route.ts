import db from "@/db/db";
import { cartItems } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { success } from "zod";

export async function DELETE(req: Request) {
  const { cartItemId, productId } = await req.json();
  console.log(cartItemId, productId);
  try {
    const response = await db
      .select()
      .from(cartItems)
      .where(
        and(
          eq(cartItems.id, String(cartItemId)),
          eq(cartItems.productId, String(productId))
        )
      );
    console.log(response);
    await db
      .delete(cartItems)
      .where(
        and(
          eq(cartItems.id, String(cartItemId)),
          eq(cartItems.productId, String(productId))
        )
      );

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
