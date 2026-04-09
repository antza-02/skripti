import { CheckCircle2, Plug } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const integrations = [
  {
    name: "Google Analytics 4",
    detail: "Property linked for sessions, users, and conversions.",
    connected: true,
  },
  {
    name: "Google Search Console",
    detail: "Search performance and query coverage.",
    connected: true,
  },
  {
    name: "Google Ads (optional)",
    detail: "Campaign spend and conversion import — roadmap.",
    connected: false,
  },
];

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Integrations</h1>
        <p className="text-sm text-muted-foreground">
          Connection badges for investor narrative — OAuth flows ship in production.
        </p>
      </div>

      <div className="grid gap-4">
        {integrations.map((i) => (
          <Card key={i.name} className="shadow-sm">
            <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0 pb-2">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Plug className="h-4 w-4 text-muted-foreground" />
                  <CardTitle className="text-base">{i.name}</CardTitle>
                </div>
                <CardDescription>{i.detail}</CardDescription>
              </div>
              {i.connected ? (
                <Badge className="gap-1 bg-emerald-600 hover:bg-emerald-600">
                  <CheckCircle2 className="h-3 w-3" /> Connected
                </Badge>
              ) : (
                <Badge variant="secondary">Not connected</Badge>
              )}
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm" disabled>
                {i.connected ? "Manage (demo)" : "Connect (demo)"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
