import db from "@/db/db";
import { orders } from "@/db/schema";
import { eq } from "drizzle-orm";

export const PATCH = async (req: Request) => {
  const { orderId } = await req.json();
  try {
    const response = await db
      .update(orders)
      .set({
        order_status: " cancelled",
      })
      .where(eq(orders.order_id, orderId));

    return Response.json({
      success: true,
      message: "Successfully cancelled order",
    });
  } catch (error) {
    return Response.json({
      error,
      success: false,
      message: "error cancelling order",
    });
  }
};
