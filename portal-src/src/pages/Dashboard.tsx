import SiteInfo from "@/components/dashboard/SiteInfo";
import StatsCard from "@/components/dashboard/StatsCard";
import TrafficChart from "@/components/dashboard/TrafficChart";
import TrafficSources from "@/components/dashboard/TrafficSources";
import ChangeRequestsChat from "@/components/dashboard/ChangeRequestsChat";
import { InvestorStory } from "@/components/portal/InvestorStory";
import { CreateRequestDialog } from "@/components/portal/CreateRequestDialog";
import { useDemo } from "@/context/DemoContext";
import { Badge } from "@/components/ui/badge";

export default function Dashboard() {
  const { client, dateRange } = useDemo();
  const s = client.stats[dateRange];

  const stats = [
    { label: "Users", value: s.users, description: "Unique people who visited your site" },
    { label: "Sessions", value: s.sessions, description: "Total browsing sessions across all users" },
    { label: "Conversions", value: s.conversions, description: "Visitors who completed a goal (e.g. booking)" },
    { label: "Bounce rate", value: s.bounce, description: "Visitors who left after viewing one page" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Welcome, {client.name}</h1>
            <Badge variant="outline" className="text-[10px]">
              {dateRange} window
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm mt-1">
            Overview of your website and performance — illustrative data for investor demos.
          </p>
        </div>
        <CreateRequestDialog />
      </div>

      <InvestorStory />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <SiteInfo url={client.domain} status="Live" lastUpdate="Today 10:45" />
        <div className="lg:col-span-2 rounded-lg border border-border bg-card p-6 shadow-sm" style={{ animationDelay: "0.05s" }}>
          <h3 className="font-semibold text-card-foreground mb-1">Key stats</h3>
          <p className="text-xs text-muted-foreground mb-3">
            Numbers update when you switch the date range or client in the header.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {stats.map((row) => (
              <StatsCard key={row.label} label={row.label} value={row.value} description={row.description} />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TrafficChart trendPct={client.trendPct} />
        <TrafficSources />
      </div>

      <ChangeRequestsChat />
    </div>
  );
}
