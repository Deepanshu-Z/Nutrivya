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

  // Total Orders
  const [totalOrders] = await db
    .select({ count: sql<number>`count(*)` })
    .from(orders)
    .where(eq(orders.user_id, userId));

  // Cancelled Orders
  const [cancelledOrders] = await db
    .select({ count: sql<number>`count(*)` })
    .from(orders)
    .where(
      sql`${orders.user_id} = ${userId} AND ${orders.order_status} = 'cancelled'`,
    );

  // Successful Payments
  const [successPayments] = await db
    .select({ count: sql<number>`count(*)` })
    .from(payments)
    .innerJoin(orders, eq(payments.order_id, orders.order_id))
    .where(
      sql`${orders.user_id} = ${userId} AND ${payments.payment_status} = 'success'`,
    );

  // Failed Payments
  const [failedPayments] = await db
    .select({ count: sql<number>`count(*)` })
    .from(payments)
    .innerJoin(orders, eq(payments.order_id, orders.order_id))
    .where(
      sql`${orders.user_id} = ${userId} AND ${payments.payment_status} = 'failed'`,
    );

  return Response.json({
    success: true,
    stats: {
      totalOrders: totalOrders.count,
      cancelledOrders: cancelledOrders.count,
      successPayments: successPayments.count,
      failedPayments: failedPayments.count,
    },
  });
}
