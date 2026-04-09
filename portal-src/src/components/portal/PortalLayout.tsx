import { Link, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  MessageSquare,
  BarChart3,
  Settings,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useDemo } from "@/context/DemoContext";
import { ClientSwitcher } from "@/components/portal/ClientSwitcher";
import { NotificationBell } from "@/components/portal/NotificationBell";
import { DateRangeToggle } from "@/components/portal/DateRangeToggle";

const nav = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/requests", label: "Requests", icon: MessageSquare },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/settings", label: "Integrations", icon: Settings },
];

export function PortalLayout() {
  const location = useLocation();
  const { logout } = useDemo();

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(28_85%_56%/0.12),transparent)]">
      <div className="flex min-h-screen">
        <aside className="hidden w-56 shrink-0 border-r border-border bg-card/80 backdrop-blur-sm md:flex md:flex-col">
          <div className="flex h-14 items-center gap-2 border-b border-border px-4">
            <span className="text-lg font-semibold tracking-tight">
              Skripti<span className="text-primary">.</span>
            </span>
            <Badge variant="secondary" className="text-[10px] font-medium">
              Demo
            </Badge>
          </div>
          <nav className="flex flex-1 flex-col gap-1 p-3">
            {nav.map(({ to, label, icon: Icon }) => {
              const active = to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);
              return (
                <Link
                  key={to}
                  to={to}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="border-t border-border p-3">
            <p className="text-[11px] text-muted-foreground leading-snug">
              Investor preview — data is illustrative only.
            </p>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-10 flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-md">
            <div className="flex items-center gap-2 md:hidden">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-semibold">Skripti</span>
              <Badge variant="secondary" className="text-[10px]">
                Demo
              </Badge>
            </div>
            <div className="ml-auto flex flex-wrap items-center justify-end gap-2">
              {location.pathname === "/" && <DateRangeToggle />}
              <ClientSwitcher />
              <NotificationBell />
              <Button variant="outline" size="sm" onClick={() => logout()}>
                Log out
              </Button>
            </div>
          </header>

          {/* Mobile nav */}
          <div className="flex gap-1 overflow-x-auto border-b border-border bg-muted/30 px-2 py-2 md:hidden">
            {nav.map(({ to, label }) => {
              const active = to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);
              return (
                <Link
                  key={to}
                  to={to}
                  className={cn(
                    "whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium",
                    active ? "bg-primary text-primary-foreground" : "text-muted-foreground",
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-6xl">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
