import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-surface-elevated border border-ink-100 rounded-2xl shadow-soft p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
