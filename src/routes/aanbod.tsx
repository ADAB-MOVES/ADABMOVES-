import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/aanbod")({
  component: () => <Outlet />,
});
