import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-30">
      <h1 className="text-center text-4xl font-semibold lg:text-5xl">
        Privacy Policy
      </h1>

      <p className="mt-4 text-center text-muted-foreground">
        Your privacy is protected. We collect minimal data and handle it
        responsibly.
      </p>

      <Card className="mt-10">
        <CardHeader>
          <CardTitle className="text-2xl">
            Transparency, Security & Your Data Rights
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            At Tulsiveda, your privacy matters. This Privacy Policy explains
            what information we collect, why we collect it, and how we protect
            your personal data in compliance with India’s Digital Personal Data
            Protection Act (DPDPA), 2023.
          </p>

          <h3 className="font-semibold text-foreground">
            Information We Collect
          </h3>
          <p>
            We collect information you provide directly, such as your name,
            email, phone number, shipping address, and order details. Payment
            information is processed securely through trusted payment gateways
            and is not stored by us.
          </p>

          <p>
            We may also collect limited technical information automatically,
            including browser type, IP address, device information, and website
            usage patterns through cookies and analytics tools.
          </p>

          <h3 className="font-semibold text-foreground">
            Why We Collect This Information
          </h3>
          <p>
            Your information is used to process orders, deliver products,
            provide customer support, improve our services, prevent fraud, and
            comply with legal and regulatory obligations.
          </p>

          <h3 className="font-semibold text-foreground">
            Data Sharing & Third Parties
          </h3>
          <p>
            We do not sell your personal data. Information is shared only with
            essential partners such as payment processors, courier services, and
            analytics providers, strictly for business operations and service
            improvement.
          </p>

          <h3 className="font-semibold text-foreground">Data Security</h3>
          <p>
            We use industry-standard security measures including SSL encryption,
            access controls, secure servers, and regular security reviews to
            protect your data from unauthorized access or misuse.
          </p>

          <h3 className="font-semibold text-foreground">Data Retention</h3>
          <p>
            Personal data is retained only as long as necessary for business,
            legal, and tax requirements. After this period, data is securely
            deleted or anonymized.
          </p>

          <h3 className="font-semibold text-foreground">Your Rights</h3>
          <p>
            You have the right to access, correct, delete, or withdraw consent
            for your personal data. Requests can be made by contacting us, and
            we respond within legally prescribed timelines.
          </p>

          <h3 className="font-semibold text-foreground">Cookies & Tracking</h3>
          <p>
            We use essential cookies for website functionality and optional
            cookies for analytics and marketing. You can manage cookie
            preferences through your browser or our cookie banner.
          </p>

          <h3 className="font-semibold text-foreground">Children’s Privacy</h3>
          <p>
            Our products and services are intended for adults only (18+). We do
            not knowingly collect personal data from children.
          </p>

          <h3 className="font-semibold text-foreground">Policy Updates</h3>
          <p>
            This Privacy Policy may be updated from time to time to reflect
            regulatory changes or improvements in our practices. Continued use
            of the website constitutes acceptance of the updated policy.
          </p>

          <h3 className="font-semibold text-foreground">Contact Us</h3>
          <p>
            For privacy-related questions or data requests, contact us at{" "}
            <strong>privacy@tulsiveda.com</strong> during business hours (10 AM
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
