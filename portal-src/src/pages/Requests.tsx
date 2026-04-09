import { CheckCircle2, CircleDashed, Loader2, type LucideIcon } from "lucide-react";
import ChangeRequestsChat from "@/components/dashboard/ChangeRequestsChat";
import { CreateRequestDialog } from "@/components/portal/CreateRequestDialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useDemo } from "@/context/DemoContext";

const mockRequests = [
  { id: "1", title: "Homepage hero refresh", status: "In progress" as const, updated: "Today" },
  { id: "2", title: "Pricing table Q2", status: "Review" as const, updated: "Yesterday" },
  { id: "3", title: "Opening hours", status: "Done" as const, updated: "Mon" },
];

const statusIcon: Record<string, LucideIcon> = {
  "In progress": Loader2,
  "Review": CircleDashed,
  "Done": CheckCircle2,
};

export default function Requests() {
  const { client } = useDemo();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Requests</h1>
          <p className="text-sm text-muted-foreground">
            Tracked work for <span className="font-medium text-foreground">{client.name}</span> — demo statuses only.
          </p>
        </div>
        <CreateRequestDialog />
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {mockRequests.map((r) => {
          const Icon = statusIcon[r.status];
          return (
            <Card key={r.id} className="shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base leading-snug">{r.title}</CardTitle>
                  <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                </div>
                <CardDescription>Updated {r.updated}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge
                  variant={r.status === "Done" ? "default" : "secondary"}
                  className="text-[10px]"
                >
                  {r.status}
                </Badge>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <ChangeRequestsChat />
    </div>
  );
}
