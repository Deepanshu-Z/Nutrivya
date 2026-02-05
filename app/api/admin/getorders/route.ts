import db from "@/db/db";
import { orders } from "@/db/schema";
import { desc, sql, eq } from "drizzle-orm"; // 1. Import 'eq'

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const limit = Number(searchParams.get("limit")) || 5;
  const page = Number(searchParams.get("page")) || 1;
  const status = searchParams.get("statusFilter");
  const offset = (page - 1) * limit;
  console.log(status);
  try {
    const whereCondition =
      //@ts-ignore
      status && status !== "ALL" ? eq(orders.order_status, status) : undefined;

    // Paginated data
    const recentOrders = await db
      .select()
      .from(orders)
      .where(whereCondition) // 3. Apply the condition here
      .orderBy(desc(orders.createdAt))
      .limit(limit)
      .offset(offset);

    // Total count
    // 4. IMPORTANT: Apply the same condition to the count
    // otherwise pagination will break when filtering
    const [{ count }] = await db
      .select({ count: sql<number>`count(*)` })
      .from(orders)
      .where(whereCondition);

    const totalPages = Math.ceil(count / limit);

    return Response.json({
      success: true,
      data: recentOrders,
      meta: {
        page,
        limit,
        totalRecords: count,
        totalPages,
      },
    });
  } catch (error) {
    console.error(error); // Log error for debugging
    return Response.json(
      {
        success: false,
        message: "Error fetching orders",
      },
      { status: 500 },
    );
  }
};
