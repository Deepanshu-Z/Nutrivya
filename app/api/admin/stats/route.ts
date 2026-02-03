import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import db from "@/db/db";
import { orders, payments } from "@/db/schema";
import { eq, sql } from "drizzle-orm";

export async function GET() {
  const session = await getServerSession(authOptions);
  //@ts-ignore
  const userId = session?.user.id;

  if (!userId) {
    return Response.json({ success: false }, { status: 401 });
  }

  // ✅ Total Orders Count
  const [totalOrders] = await db
    .select({ count: sql<number>`COUNT(*)` })
    .from(orders)
    .where(eq(orders.user_id, userId));

  // ✅ Cancelled Orders Count
  const [cancelledOrders] = await db
    .select({ count: sql<number>`COUNT(*)` })
    .from(orders)
    .where(
      sql`${orders.user_id} = ${userId} 
          AND ${orders.order_status} = 'cancelled'`,
    );

  // Failed Payments Count (Correct)
  const [failedPayments] = await db
    .select({ count: sql<number>`COUNT(*)` })
    .from(payments)
    .innerJoin(orders, eq(payments.order_id, orders.order_id))
    .where(
      sql`${orders.user_id} = ${userId}
        AND ${payments.payment_status} = 'failed'`,
    );

  // ✅ Total Amount SUM (orders.amount)
  const [totalAmount] = await db
    .select({
      sum: sql<number>`COALESCE(SUM(${orders.amount}), 0)`,
    })
    .from(orders)
    .where(eq(orders.user_id, userId));

  return Response.json({
    success: true,
    stats: {
      totalOrders: totalOrders.count,
      cancelledOrders: cancelledOrders.count,
      failedPayments: failedPayments.count,
      totalAmount: totalAmount.sum, // in paise
    },
  });
}
