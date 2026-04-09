import { ArrowRight, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function InvestorStory() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5 lg:col-span-1">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <CardTitle className="text-base">Impact (illustrative)</CardTitle>
          </div>
          <CardDescription>Story metrics for investor conversations.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-sm text-muted-foreground">Lead quality</span>
            <span className="text-lg font-semibold text-emerald-600">+32%</span>
          </div>
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-sm text-muted-foreground">Update turnaround</span>
            <span className="text-lg font-semibold text-emerald-600">−55%</span>
          </div>
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-sm text-muted-foreground">Time on site</span>
            <span className="text-lg font-semibold text-foreground">+18%</span>
          </div>
          <Badge variant="outline" className="w-fit text-[10px]">
            Mock KPIs
          </Badge>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Before / after</CardTitle>
          <CardDescription>How requests flow once clients use the portal (demo narrative).</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-muted/40 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Before</p>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li>• Email threads and lost context</li>
                <li>• No shared status on changes</li>
                <li>• Analytics scattered across tools</li>
              </ul>
            </div>
            <div className="rounded-lg border border-primary/25 bg-primary/5 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-primary">After</p>
              <ul className="mt-2 space-y-2 text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  One place for requests + history
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Clear statuses from idea to live
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Performance snapshot beside the work
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-3">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <CardTitle className="text-base">Example timeline</CardTitle>
          </div>
          <CardDescription>Single request journey (mock timestamps).</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { t: "09:10", l: "Request submitted", badge: "Logged" },
              { t: "11:40", l: "Triaged & scoped", badge: "In progress" },
              { t: "14:40", l: "Deployed to production", badge: "Done" },
            ].map((step) => (
              <div
                key={step.t}
                className="rounded-lg border border-border bg-muted/30 p-4"
              >
                <span className="text-xs font-mono text-muted-foreground">{step.t}</span>
                <p className="mt-1 text-sm font-medium leading-snug">{step.l}</p>
                <Badge variant="outline" className="mt-2 text-[10px]">
                  {step.badge}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
