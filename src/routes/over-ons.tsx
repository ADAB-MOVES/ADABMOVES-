import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/over-ons")({
  component: () => <Outlet />,
});
