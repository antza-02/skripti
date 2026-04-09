import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { TrendingUp } from "lucide-react";

const data = [
  { name: "Mar 3", value: 620 },
  { name: "Mar 10", value: 750 },
  { name: "Mar 17", value: 680 },
  { name: "Mar 24", value: 890 },
  { name: "Mar 31", value: 820 },
  { name: "Apr 7", value: 1050 },
  { name: "Apr 14", value: 980 },
  { name: "Apr 21", value: 1120 },
  { name: "Apr 28", value: 1250 },
  { name: "May 5", value: 1380 },
  { name: "May 12", value: 1420 },
  { name: "May 19", value: 1560 },
];

type TrafficChartProps = {
  trendPct?: string;
};

const TrafficChart = ({ trendPct = "+152%" }: TrafficChartProps) => (
  <div className="rounded-lg border border-border bg-card p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
    <div className="flex items-start justify-between mb-1">
      <h3 className="font-semibold text-card-foreground">Traffic trend</h3>
      <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
        <TrendingUp className="h-3 w-3" /> {trendPct}
      </span>
    </div>
    <p className="text-xs text-muted-foreground mb-4">Weekly visitors over the last 12 weeks. Each bar represents total site visits for that week.</p>
    <div className="h-52">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barCategoryGap="20%">
          <XAxis dataKey="name" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} interval={1} />
          <YAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} width={35} />
          <Tooltip
            contentStyle={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
              fontSize: 13,
            }}
            formatter={(value: number) => [`${value.toLocaleString()} visitors`, "Weekly visits"]}
            cursor={{ fill: "hsl(var(--muted))" }}
          />
          <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default TrafficChart;
