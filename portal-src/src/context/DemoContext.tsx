import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

const STORAGE_KEY = "portal-demo-auth";

export type DateRangeKey = "7d" | "30d" | "90d";

export type ClientProfile = {
  id: string;
  name: string;
  domain: string;
  trendPct: string;
  stats: Record<
    DateRangeKey,
    { users: string; sessions: string; conversions: string; bounce: string }
  >;
};

const CLIENTS: ClientProfile[] = [
  {
    id: "northstar",
    name: "Northstar Clinic",
    domain: "https://northstarclinic.fi",
    trendPct: "+152%",
    stats: {
      "7d": { users: "2,840", sessions: "3,120", conversions: "94", bounce: "31.1%" },
      "30d": { users: "12,480", sessions: "16,920", conversions: "412", bounce: "34.2%" },
      "90d": { users: "34,200", sessions: "46,800", conversions: "1,180", bounce: "35.0%" },
    },
  },
  {
    id: "aurora",
    name: "Aurora Legal",
    domain: "https://auroralegal.fi",
    trendPct: "+41%",
    stats: {
      "7d": { users: "1,120", sessions: "1,480", conversions: "38", bounce: "42.0%" },
      "30d": { users: "5,900", sessions: "7,200", conversions: "210", bounce: "44.5%" },
      "90d": { users: "16,400", sessions: "19,100", conversions: "612", bounce: "45.2%" },
    },
  },
  {
    id: "baltic",
    name: "Baltic Logistics",
    domain: "https://balticlogistics.eu",
    trendPct: "+88%",
    stats: {
      "7d": { users: "4,200", sessions: "5,800", conversions: "156", bounce: "28.4%" },
      "30d": { users: "18,200", sessions: "24,100", conversions: "890", bounce: "30.8%" },
      "90d": { users: "52,000", sessions: "68,400", conversions: "2,450", bounce: "31.5%" },
    },
  },
];

export type DemoNotification = {
  id: string;
  title: string;
  body: string;
  time: string;
  unread: boolean;
};

type DemoContextValue = {
  isLoggedIn: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  clients: ClientProfile[];
  client: ClientProfile;
  setClientId: (id: string) => void;
  dateRange: DateRangeKey;
  setDateRange: (r: DateRangeKey) => void;
  notifications: DemoNotification[];
  markAllNotificationsRead: () => void;
  addDemoNotification: (n: Omit<DemoNotification, "id" | "unread">) => void;
};

const DemoContext = createContext<DemoContextValue | null>(null);

const initialNotifications: DemoNotification[] = [
  { id: "1", title: "Request completed", body: "Homepage hero updated and deployed.", time: "2h ago", unread: true },
  { id: "2", title: "Traffic up 12%", body: "Compared to last week (mock data).", time: "Yesterday", unread: true },
  { id: "3", title: "Sync reminder", body: "Analytics last synced 4 hours ago (demo).", time: "Yesterday", unread: false },
];

export function DemoProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY) === "1");
  const [clientId, setClientIdState] = useState(CLIENTS[0].id);
  const [dateRange, setDateRange] = useState<DateRangeKey>("30d");
  const [notifications, setNotifications] = useState<DemoNotification[]>(initialNotifications);

  const client = useMemo(() => CLIENTS.find((c) => c.id === clientId) ?? CLIENTS[0], [clientId]);

  const login = useCallback((email: string, password: string) => {
    const ok = email.trim().toLowerCase() === "demo@skripti.fi" && password === "demo";
    if (ok) {
      window.localStorage.setItem(STORAGE_KEY, "1");
      setIsLoggedIn(true);
    }
    return ok;
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem(STORAGE_KEY);
    setIsLoggedIn(false);
  }, []);

  const setClientId = useCallback((id: string) => {
    setClientIdState(id);
  }, []);

  const markAllNotificationsRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  }, []);

  const addDemoNotification = useCallback((n: Omit<DemoNotification, "id" | "unread">) => {
    setNotifications((prev) => [{ id: String(Date.now()), ...n, unread: true }, ...prev]);
  }, []);

  const value = useMemo(
    () => ({
      isLoggedIn,
      login,
      logout,
      clients: CLIENTS,
      client,
      setClientId,
      dateRange,
      setDateRange,
      notifications,
      markAllNotificationsRead,
      addDemoNotification,
    }),
    [isLoggedIn, login, logout, client, setClientId, dateRange, notifications, markAllNotificationsRead, addDemoNotification],
  );

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error("useDemo must be used within DemoProvider");
  return ctx;
}
