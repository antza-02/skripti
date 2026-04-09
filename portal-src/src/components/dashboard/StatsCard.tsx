interface StatsCardProps {
  label: string;
  value: string;
  description?: string;
}

const StatsCard = ({ label, value, description }: StatsCardProps) => (
  <div className="rounded-lg border border-border bg-card p-4 group relative">
    <p className="text-sm text-muted-foreground">{label}</p>
    <p className="text-2xl font-bold text-card-foreground mt-1">{value}</p>
    {description && (
      <p className="text-[11px] text-muted-foreground mt-1.5 leading-tight">{description}</p>
    )}
  </div>
);

export default StatsCard;
