import type { LucideIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

export interface DashboardCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  subtitle?: string;
  span?: "1" | "2";
  dark?: boolean;
  onClick?: () => void;
}

export function DashboardCard({
  icon: Icon,
  title,
  subtitle,
  span = "1",
  dark = false,
  onClick,
}: DashboardCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative flex flex-col items-start gap-3 overflow-hidden rounded-2xl border p-5 text-right transition-all duration-200 hover:scale-[1.02] hover:shadow-xl active:scale-[0.99] sm:p-6",
        span === "2" ? "sm:col-span-2" : "",
        dark
          ? "border-white/10 bg-gradient-to-br from-[#1a2332] to-[#141d2e] shadow-lg shadow-black/30 hover:border-amber-500/40"
          : "border-slate-200 bg-white shadow-md shadow-slate-200/50 hover:border-amber-500/50 hover:shadow-lg"
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute -left-8 -top-8 h-24 w-24 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-20",
          dark ? "bg-amber-400" : "bg-amber-500"
        )}
      />
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-xl border transition-colors",
          dark
            ? "border-amber-500/30 bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20"
            : "border-amber-500/40 bg-amber-50 text-amber-600 group-hover:bg-amber-100"
        )}
      >
        <Icon className="h-6 w-6" strokeWidth={1.8} />
      </div>

      <div className="flex flex-col gap-1">
        <span
          className={`text-base font-bold leading-snug sm:text-lg ${
            dark ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </span>
        {subtitle && (
          <span
            className={`text-xs leading-relaxed sm:text-sm ${
              dark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            {subtitle}
          </span>
        )}
      </div>
    </button>
  );
}

export default DashboardCard;
