import { Building2 } from "lucide-react";
import { useDemo } from "@/context/DemoContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ClientSwitcher() {
  const { clients, client, setClientId } = useDemo();

  return (
    <div className="flex items-center gap-2">
      <Building2 className="hidden h-4 w-4 text-muted-foreground sm:block" />
      <Select value={client.id} onValueChange={setClientId}>
        <SelectTrigger className="h-9 w-[180px] sm:w-[220px]">
          <SelectValue placeholder="Client" />
        </SelectTrigger>
        <SelectContent>
          {clients.map((c) => (
            <SelectItem key={c.id} value={c.id}>
              {c.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
