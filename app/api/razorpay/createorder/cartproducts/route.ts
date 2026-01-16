import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import db from "@/db/db";
import { cart } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { getServerSession } from "next-auth";

export const POST = async () => {
  const session = await getServerSession(authOptions);
  //@ts-ignore
  const userId = session?.user.id;
  console.log(userId);
  try {
    const response = await db
      .select()
      .from(cart)
      .where(and(eq(cart.userId, userId), eq(cart.status, "active")));
    console.log(response);
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false });
  }
};
