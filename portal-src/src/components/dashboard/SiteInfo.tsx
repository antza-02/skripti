import { ExternalLink } from "lucide-react";

interface SiteInfoProps {
  url: string;
  status: string;
  lastUpdate: string;
}

const SiteInfo = ({ url, status, lastUpdate }: SiteInfoProps) => (
  <div className="rounded-lg border border-border bg-card p-6 animate-fade-in">
    <h3 className="font-semibold text-card-foreground mb-1">Your site</h3>
    <p className="text-xs text-muted-foreground mb-3">Your live website managed by our team.</p>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:underline inline-flex items-center gap-1 text-sm font-medium"
    >
      {url} <ExternalLink className="h-3 w-3" />
    </a>
    <div className="mt-3 space-y-1 text-sm text-muted-foreground">
      <p>
        Status: <span className="font-semibold text-card-foreground">{status}</span>
      </p>
      <p>
        Last update: <span className="font-semibold text-card-foreground">{lastUpdate}</span>
      </p>
    </div>
  </div>
);

export default SiteInfo;
