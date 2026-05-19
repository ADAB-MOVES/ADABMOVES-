import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/visie")({
  beforeLoad: () => {
    throw redirect({ to: "/over-ons/missie-visie" });
  },
});
