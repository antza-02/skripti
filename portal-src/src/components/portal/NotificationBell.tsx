import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useDemo } from "@/context/DemoContext";

export function NotificationBell() {
  const { notifications, markAllNotificationsRead } = useDemo();
  const unread = notifications.filter((n) => n.unread).length;

  return (
    <DropdownMenu onOpenChange={(open) => open && markAllNotificationsRead()}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative shrink-0" aria-label="Notifications">
          <Bell className="h-4 w-4" />
          {unread > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
              {unread}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between">
          Notifications
          <Badge variant="secondary" className="text-[10px]">
            Demo
          </Badge>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.slice(0, 6).map((n) => (
          <DropdownMenuItem key={n.id} className="flex flex-col items-start gap-0.5 py-3">
            <span className="text-sm font-medium">{n.title}</span>
            <span className="text-xs text-muted-foreground">{n.body}</span>
            <span className="text-[10px] text-muted-foreground">{n.time}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
