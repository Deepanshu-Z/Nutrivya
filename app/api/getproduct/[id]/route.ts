import db from "@/db/db";
import schema from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { success } from "zod";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const response = await db
      .select()
      .from(schema.products)
      .where(eq(schema.products.id, id));
    const product = response[0];
    return NextResponse.json({ product, success: true });
  } catch (error) {
    console.log("error getting products....", error);
    return NextResponse.json({ error, success: false });
  }
}
