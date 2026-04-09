import { useState, type FormEvent } from "react";
import { Navigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useDemo } from "@/context/DemoContext";

export default function Login() {
  const { isLoggedIn, login } = useDemo();
  const [email, setEmail] = useState("demo@skripti.fi");
  const [password, setPassword] = useState("demo");
  const [error, setError] = useState("");

  if (isLoggedIn) return <Navigate to="/" replace />;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!login(email, password)) {
      setError("Use the demo credentials below.");
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(28_85%_56%/0.15),transparent)] flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-border/80 shadow-lg shadow-primary/5">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <CardTitle className="text-2xl">Skripti Client Portal</CardTitle>
            <Badge variant="secondary">Investor demo</Badge>
          </div>
          <CardDescription>Sign in to explore the mock dashboard — no backend.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full">
              Continue
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Demo login: <span className="font-mono">demo@skripti.fi</span> /{" "}
              <span className="font-mono">demo</span>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
