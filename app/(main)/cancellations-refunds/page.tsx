import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function RefundsAndCancellationsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-32">
      {/* Page Header */}
      <section className="space-y-3 text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Refunds & Cancellations
        </h1>
        <p className="text-muted-foreground">
          Tulsiveda – Customer-First Policy
        </p>
        <Separator className="my-6" />
      </section>

      {/* Headline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">
            Your Satisfaction Guaranteed – Hassle-Free Returns, Refunds &
            Cancellations
          </CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          Simple, transparent, customer-focused policies because your
          satisfaction is our priority.
        </CardContent>
      </Card>

      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-relaxed">
          <p>
            We stand behind the quality of Tulsiveda products completely. We
            understand that sometimes a purchase may not meet your expectations,
            and that&apos;s okay.
          </p>
          <p>
            Our cancellation and refund policy is designed to be fair,
            transparent, and customer-first — no complicated requirements or
            hidden conditions.
          </p>
        </CardContent>
      </Card>

      {/* Refund Eligibility */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Refund Eligibility</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm">
          <div>
            <Badge variant="default">Eligible for Refund</Badge>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Product defect or damage</li>
              <li>Incorrect product delivered</li>
              <li>Changed mind (unopened products)</li>
              <li>Product not as described</li>
              <li>Quality below promised standards</li>
            </ul>
          </div>

          <div>
            <Badge variant="destructive">Non-Refundable Items</Badge>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Opened or used products (unless defective)</li>
              <li>Final or clearance sale items</li>
              <li>Customized or made-to-order products</li>
              <li>Downloaded digital products</li>
              <li>Returns after refund window expiry</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Refund Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Refund Timeframe & Process</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <Alert>
            <AlertDescription>
              <strong>30-Day Money-Back Guarantee</strong> — request refunds
              within 30 calendar days from delivery.
            </AlertDescription>
          </Alert>

          <ol className="list-decimal space-y-3 pl-5">
            <li>
              <strong>Contact Support:</strong> support@tulsiveda.com with order
              details.
            </li>
            <li>
              <strong>Approval:</strong> Request reviewed within 24-48 hours.
            </li>
            <li>
              <strong>Return Shipping:</strong> Free label for eligible returns.
            </li>
            <li>
              <strong>Inspection:</strong> Completed in 3-5 business days.
            </li>
            <li>
              <strong>Refund Processing:</strong> 7-14 business days.
            </li>
          </ol>
        </CardContent>
      </Card>

      {/* Exchange Policy */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Exchange Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            Prefer an exchange instead of a refund? Exchanges are available
            within the same 30-day window.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>No extra charge for same-priced products</li>
            <li>Pay difference for higher-priced products</li>
            <li>Refund difference for lower-priced products</li>
            <li>No additional shipping charges</li>
          </ul>
        </CardContent>
      </Card>

      {/* Cancellation Policy */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Cancellation Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <ul className="list-disc pl-5 space-y-2">
            <li>Orders can be cancelled before dispatch</li>
            <li>Request cancellation within 24 hours of order placement</li>
            <li>Dispatched orders cannot be cancelled</li>
          </ul>
        </CardContent>
      </Card>

      {/* Store Credit */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Store Credit Option</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>
            Choose store credit instead of a refund and get{" "}
            <strong>120% value</strong>.
          </p>
          <p>Valid for 12 months across all Tulsiveda products.</p>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card>
        <CardHeader>
          <CardTitle>Refund & Return Support</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>Email: support@tulsiveda.com</p>
          <p>Hours: 10 AM – 6 PM IST (Mon–Sat)</p>
          <p>Average response time: 24–48 hours</p>
        </CardContent>
      </Card>
    </main>
  );
}
