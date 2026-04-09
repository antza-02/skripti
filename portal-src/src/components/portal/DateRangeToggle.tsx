import { cn } from "@/lib/utils";
import { useDemo, type DateRangeKey } from "@/context/DemoContext";

const options: { key: DateRangeKey; label: string }[] = [
  { key: "7d", label: "7d" },
  { key: "30d", label: "30d" },
  { key: "90d", label: "90d" },
];

export function DateRangeToggle() {
  const { dateRange, setDateRange } = useDemo();

  return (
    <div className="inline-flex rounded-lg border border-border bg-muted/40 p-0.5">
      {options.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          onClick={() => setDateRange(key)}
          className={cn(
            "rounded-md px-2.5 py-1 text-xs font-medium transition-colors sm:px-3",
            dateRange === key ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
