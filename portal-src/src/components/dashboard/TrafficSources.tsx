const sources = [
  { source: "Organic Search", users: "6,120", share: "49%" },
  { source: "Direct", users: "3,170", share: "25%" },
  { source: "Social", users: "1,950", share: "16%" },
  { source: "Referral", users: "1,240", share: "10%" },
];

const TrafficSources = () => (
  <div className="rounded-lg border border-border bg-card p-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
    <h3 className="font-semibold text-card-foreground mb-1">Top traffic sources</h3>
    <p className="text-xs text-muted-foreground mb-4">Where your visitors come from. Focus marketing efforts on channels with the highest share.</p>
    <table className="w-full text-sm">
      <thead>
        <tr className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <th className="text-left pb-3">Source</th>
          <th className="text-right pb-3">Users</th>
          <th className="text-right pb-3">Share</th>
        </tr>
      </thead>
      <tbody>
        {sources.map((s) => (
          <tr key={s.source} className="border-t border-border">
            <td className="py-2.5 text-card-foreground">{s.source}</td>
            <td className="py-2.5 text-right text-card-foreground font-medium">{s.users}</td>
            <td className="py-2.5 text-right text-muted-foreground">{s.share}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TrafficSources;
