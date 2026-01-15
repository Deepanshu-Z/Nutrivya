import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
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
    case "payment.captured":
      // ✅ mark order PAID in DB
      break;

    case "payment.failed":
      // ❌ mark FAILED
      break;

    case "refund.processed":
      // 🔄 update refund status
      break;
  }

  return NextResponse.json({ status: "ok" });
}
