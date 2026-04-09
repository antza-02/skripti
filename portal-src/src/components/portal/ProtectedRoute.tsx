import { Navigate, Outlet } from "react-router-dom";
import { useDemo } from "@/context/DemoContext";

export function ProtectedRoute() {
  const { isLoggedIn } = useDemo();
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  return <Outlet />;
}
