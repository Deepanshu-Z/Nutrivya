import db from "@/db/db";
import { ticket } from "@/db/schema";
import { asc, eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");

  try {
    const validStatuses = ["pending", "open", "completed", "replied"] as const;
    if (!validStatuses.includes(status as any)) {
      return Response.json({ error: "Invalid status" }, { status: 400 });
    }

    const validatedStatus = status as
      | "pending"
      | "open"
      | "completed"
      | "replied";

    const result = await db
      .select()
      .from(ticket)
      .where(eq(ticket.status, validatedStatus))
      .orderBy(asc(ticket.createdAt))
      .limit(10)
      .offset(0);

    return Response.json({
      result,
      message: "Successfully fetched",
      success: true,
    });
  } catch (error) {
    return Response.json({
      error,
      message: "Couldn't get tickets",
      success: false,
    });
  }
};
