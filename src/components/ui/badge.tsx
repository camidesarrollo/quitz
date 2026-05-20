import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300",
        success: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
        error: "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300",
        brand: "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
