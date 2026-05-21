import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/aanbod/community/")({
  beforeLoad: () => {
    throw redirect({ to: "/aanbod/community/kinderen" });
  },
});
