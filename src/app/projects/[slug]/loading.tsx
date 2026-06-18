import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <main className="min-h-dvh flex items-center justify-center">
      <Loader2 className="size-8 animate-spin text-muted-foreground" />
    </main>
  );
}
