import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  depth = true,
}: {
  children: React.ReactNode;
  className?: string;
  /** Soft 3D hover lift */
  depth?: boolean;
}) {
  return (
    <div
      className={cn(
        "card rounded-3xl border-2 border-ink-100 bg-surface-elevated p-5 sm:p-6",
        depth && "card-3d",
        className
      )}
    >
      {children}
    </div>
  );
}
