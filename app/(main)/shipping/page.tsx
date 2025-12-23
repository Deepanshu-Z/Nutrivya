import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ShippingPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-30">
      <h1 className="text-center text-4xl font-semibold lg:text-5xl">
        Shipping Policy
      </h1>

      <p className="mt-4 text-center text-muted-foreground">
        Fast, reliable delivery across India with transparent timelines.
      </p>

      <Card className="mt-10">
        <CardHeader>
          <CardTitle className="text-2xl">
            Shipping & Delivery Information
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            At Tulsiveda, we aim to deliver your orders safely and on time. We
            partner with trusted courier services to ensure reliable delivery
            across India.
          </p>

          <h3 className="font-semibold text-foreground">Shipping Coverage</h3>
          <p>
            We currently ship to all states and union territories within India,
            including metro cities, tier-2 cities, rural areas, northeast
            regions, and hilly locations. International shipping is not
            available at this time.
          </p>

          <h3 className="font-semibold text-foreground">Shipping Charges</h3>
          <p>
            Orders above ₹500 qualify for free shipping. Orders below ₹500 may
            attract standard shipping charges, which are displayed clearly at
            checkout. Cash on Delivery orders may include an additional handling
            fee.
          </p>

          <h3 className="font-semibold text-foreground">
            Processing & Delivery Time
          </h3>
          <p>
            Prepaid orders are usually dispatched within 24 hours, while COD
            orders may take up to 48 hours. Delivery timelines vary by location
            and typically range from 3 to 15 business days after dispatch.
          </p>

          <h3 className="font-semibold text-foreground">Courier Partners</h3>
          <p>
            We work with reliable courier partners such as Blue Dart, DTDC,
            Delhivery, and India Post. The courier is selected automatically
            based on your location for optimal delivery.
          </p>

          <h3 className="font-semibold text-foreground">Order Tracking</h3>
          <p>
            Once your order is dispatched, you will receive a tracking number
            via email and SMS. You can track your order through our website or
            directly on the courier partner’s website.
          </p>

          <h3 className="font-semibold text-foreground">
            Delivery Issues & Delays
          </h3>
          <p>
            Delivery delays may occur due to weather conditions, courier
            operational issues, remote locations, or other circumstances beyond
            our control. In such cases, we will keep you informed and assist
            wherever possible.
          </p>

          <h3 className="font-semibold text-foreground">
            Damaged or Lost Packages
          </h3>
          <p>
            If your order arrives damaged or is lost in transit, please contact
            us immediately with photos and order details. We will arrange a
            replacement or refund after verification.
          </p>

          <h3 className="font-semibold text-foreground">
            Returns & Reverse Shipping
          </h3>
          <p>
            Return shipping is free for defective or incorrect items. For other
            returns, shipping charges may apply as per our refund policy.
          </p>

          <h3 className="font-semibold text-foreground">
            Contact Shipping Support
          </h3>
          <p>
            For any shipping or delivery related queries, reach out to us at{" "}
            <strong>support@tulsiveda.com</strong> during business hours (10 AM
            – 6 PM IST, Monday to Saturday).
          </p>

          <p className="pt-4 text-xs text-muted-foreground">
            Last Updated: December 23, 2025
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
