export const runtime = "nodejs";

import db from "@/db/db";
import { orders, payments } from "@/db/schema";
import crypto from "crypto";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("WEBHOOk RAANNNN!!!!!!!!!!");
  const body = await req.text();
  const signature = req.headers.get("x-razorpay-signature")!;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET!)
    .update(body)
    .digest("hex");

  if (expectedSignature !== signature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const event = JSON.parse(body);

  switch (event.event) {
    case "payment.captured": {
      const payment = event.payload.payment.entity;

      await db.transaction(async (tx) => {
        // 1. Mark order as PAID
        await tx
          .update(orders)
          .set({
            order_status: "paid",
            updatedAt: new Date(),
          })
          .where(eq(orders.order_id, payment.order_id));

        // 2. Create payment record
        await tx.insert(payments).values({
          order_id: payment.order_id, // 👈 FROM WEBHOOK
          payment_id: payment.id,
          signature, // webhook signature header
          amount: payment.amount, // paise
          method: payment.method,
          payment_status: "success",
        });
      });

      break;
    }

    case "payment.failed": {
      const payment = event.payload.payment.entity;

      await db.transaction(async (tx) => {
        await tx
          .update(orders)
          .set({
            order_status: "failed",
            updatedAt: new Date(),
          })
          .where(eq(orders.order_id, payment.order_id));

        await tx.insert(payments).values({
          order_id: payment.order_id,
          payment_id: payment.id,
          amount: payment.amount,
          method: payment.method,
          payment_status: "failed",
        });
      });

      break;
    }
  }

  return NextResponse.json({ status: "ok" });
}
