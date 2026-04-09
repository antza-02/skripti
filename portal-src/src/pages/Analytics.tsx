import TrafficChart from "@/components/dashboard/TrafficChart";
import TrafficSources from "@/components/dashboard/TrafficSources";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DateRangeToggle } from "@/components/portal/DateRangeToggle";
import { useDemo } from "@/context/DemoContext";

export default function Analytics() {
  const { client, dateRange } = useDemo();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
          <p className="text-sm text-muted-foreground">
            Deeper view — same mock engine as the dashboard. Range:{" "}
            <Badge variant="outline" className="text-[10px]">
              {dateRange}
            </Badge>
          </p>
        </div>
        <DateRangeToggle />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-primary/15 bg-gradient-to-br from-card to-muted/30">
          <CardHeader>
            <CardTitle className="text-base">Funnel snapshot (illustrative)</CardTitle>
            <CardDescription>Shown to investors as a direction for product depth.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-3">
            {(
              [
                { label: "Sessions", value: client.stats[dateRange].sessions },
                { label: "Page views", value: "—", hint: "mock" },
                { label: "Conversions", value: client.stats[dateRange].conversions },
              ] as const
            ).map((row) => (
              <div key={row.label} className="rounded-lg border border-border bg-background/80 p-3">
                <p className="text-xs text-muted-foreground">{row.label}</p>
                <p className="text-xl font-semibold">{row.value}</p>
                {"hint" in row && row.hint ? (
                  <p className="text-[10px] text-muted-foreground mt-1">{row.hint}</p>
                ) : null}
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Sync status</CardTitle>
            <CardDescription>GA4 / GSC would sync on a schedule.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">Last sync</span>
              <span className="font-medium">4h ago (demo)</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">Source</span>
              <span className="font-medium">Mock cache</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TrafficChart trendPct={client.trendPct} />
        <TrafficSources />
      </div>
    </div>
  );
}
