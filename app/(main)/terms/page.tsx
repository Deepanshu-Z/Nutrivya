import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-30">
      <h1 className="text-center text-4xl font-semibold lg:text-5xl">
        Terms and Conditions
      </h1>

      <p className="mt-4 text-center text-muted-foreground">
        Please read these terms carefully before using Tulsiveda.
      </p>

      <Card className="mt-10">
        <CardHeader>
          <CardTitle className="text-2xl">
            Terms and Conditions of Use – Binding Agreement
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            By accessing and using the Tulsiveda website and purchasing our
            products, you agree to be bound by these Terms and Conditions. If
            you do not agree, you must not use this website or our services.
          </p>

          <p>
            Tulsiveda reserves the right to update or modify these terms at any
            time. Continued use of the website constitutes acceptance of the
            updated terms.
          </p>

          <h3 className="text-base font-semibold text-foreground">
            Intellectual Property
          </h3>
          <p>
            All content on this website, including text, graphics, logos,
            images, and product descriptions, is the property of Tulsiveda and
            may not be copied, reproduced, or distributed without written
            permission.
          </p>

          <h3 className="text-base font-semibold text-foreground">
            Product Information
          </h3>
          <p>
            We strive to ensure accurate product information; however, errors
            may occur. Product images are for representation only and actual
            products may vary slightly.
          </p>

          <h3 className="text-base font-semibold text-foreground">
            Health & Medical Disclaimer
          </h3>
          <p>
            Tulsiveda products are Ayurvedic supplements intended to support
            general wellness. They are not intended to diagnose, treat, cure, or
            prevent any disease. Always consult a healthcare professional before
            use.
          </p>

          <h3 className="text-base font-semibold text-foreground">
            Payments & Orders
          </h3>
          <p>
            Prices are listed in INR and are subject to change without notice.
            Orders may be cancelled if pricing or product information is found
            to be incorrect.
          </p>

          <h3 className="text-base font-semibold text-foreground">
            Limitation of Liability
          </h3>
          <p>
            Tulsiveda shall not be liable for indirect, incidental, or
            consequential damages. Total liability shall not exceed the amount
            paid for the product.
          </p>

          <h3 className="text-base font-semibold text-foreground">
            Governing Law
          </h3>
          <p>
            These terms are governed by the laws of India. Any disputes shall be
            subject to the exclusive jurisdiction of Indian courts.
          </p>

          <p className="pt-4 text-xs text-muted-foreground">
            Last Updated: December 23, 2025
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
