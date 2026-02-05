import db from "@/db/db";
import { orders, users } from "@/db/schema";
import { and, eq } from "drizzle-orm";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  const orderId = searchParams.get("orderId");

  if (!userId || !orderId)
    return Response.json({
      success: false,
      message: "USER_ID or ORDER_ID not found ",
    });

  try {
    const userDetails = await db
      .select()
      .from(users)
      .where(eq(users.id, userId));

    const specificTransaction = await db
      .select()
      .from(orders)
      .where(and(eq(orders.user_id, userId), eq(orders.order_id, orderId)));

    const allTransactions = await db
      .select()
      .from(orders)
      .where(eq(orders.user_id, userId));

    return Response.json({
      success: true,
      details: { userDetails, allTransactions, specificTransaction },
      message: "successfuly fetched details",
    });
  } catch (error) {
    return Response.json({
      success: true,
      message: "error getting details",
      error,
    });
  }
};
