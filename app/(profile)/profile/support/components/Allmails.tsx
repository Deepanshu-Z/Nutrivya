import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail } from "../page";

export function PreviousMails({ mails }: { mails: Mail[] }) {
  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Previous Messages</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {mails.map((mail) => (
          <div
            key={mail.id}
            className="flex items-center justify-between rounded-lg border p-4 hover:bg-muted transition"
          >
            <div className="space-y-1">
              <p className="font-medium">{mail.subject}</p>
              <p className="text-sm text-muted-foreground">{mail.email}</p>
            </div>

            <Badge variant="secondary">
              {new Date(mail.createdAt).toLocaleDateString()}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
