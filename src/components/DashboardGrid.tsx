import {
  Megaphone,
  BarChart3,
  Search,
  Wrench,
  FolderArchive,
  Wallet,
  Send,
  Settings,
  FileText,
  PieChart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import React from "react";
import { DashboardCard } from "@/components/DashboardCard";

type View = "dashboard" | "technical" | "branches" | "settings";

interface CardDef {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  span: "1" | "2";
  view?: View;
}

interface DashboardGridProps {
  dark: boolean;
  onNavigate?: (view: View) => void;
}

const rows: CardDef[][] = [
  [
    { icon: Megaphone, title: "التعميمات والقرارات", span: "1" },
    { icon: BarChart3, title: "لوحة القيادة", span: "1" },
    { icon: Search, title: "الاستعلامات السريعة", span: "1" },
  ],
  [
    {
      icon: Wrench,
      title: "الشئون الفنية",
      subtitle: "التأسيس والرقابة والاعتماد الهندسي",
      span: "2",
      view: "technical",
    },
    { icon: FolderArchive, title: "الأرشيف الإلكتروني", span: "1" },
  ],
  [
    { icon: Wallet, title: "الإدارة المالية للمشاريع", span: "1" },
    {
      icon: Send,
      title: "الفروع والمشاريع",
      subtitle: "الإدخال الميداني للمركزي",
      span: "2",
      view: "branches",
    },
  ],
  [
    {
      icon: Settings,
      title: "الإعدادات والضبط",
      span: "1",
      view: "settings",
    },
    { icon: FileText, title: "التقارير التنفيذية", span: "1" },
    { icon: PieChart, title: "التكلفة والإحصاء", span: "1" },
  ],
];

export function DashboardGrid({ dark, onNavigate }: DashboardGridProps) {
  return (
    <div className="flex flex-col gap-4">
      {rows.map((row, i) => (
        <div key={i} className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {row.map((card, j) => (
            <DashboardCard
              key={j}
              icon={card.icon as unknown as React.ComponentType<React.SVGProps<SVGSVGElement>>}
              title={card.title}
              subtitle={card.subtitle}
              span={card.span}
              dark={dark}
              onClick={() => card.view && onNavigate?.(card.view)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default DashboardGrid;
