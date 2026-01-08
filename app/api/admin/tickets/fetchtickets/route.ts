import db from "@/db/db";
import { ticket } from "@/db/schema";
import { asc } from "drizzle-orm";

export const GET = async () => {
  try {
    const result = await db
      .select()
      .from(ticket)
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
