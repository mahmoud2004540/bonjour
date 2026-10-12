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
    <div className={cn("card", depth && "card-3d", className)}>
      {children}
    </div>
  );
}
