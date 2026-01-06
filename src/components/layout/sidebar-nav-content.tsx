// This component is created to avoid repetition between sidebar-nav.tsx and header.tsx for mobile view
"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation'
import {
  Archive,
  Bell,
  Building,
  FileText,
  Gavel,
  Landmark,
  LayoutDashboard,
  MapPin,
  MessageSquareWarning,
  PieChart,
  Settings,
  Users,
  FolderKanban,
  Building2,
} from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const navItems = [
  { href: "/", icon: LayoutDashboard, label: "Tableau de bord" },
  { href: "/civil-status", icon: FileText, label: "État Civil" },
  { href: "/land", icon: MapPin, label: "Foncier" },
  { href: "/urbanisme", icon: Building, label: "Urbanisme" },
  { href: "/deliberations", icon: Gavel, label: "Délibérations" },
  { href: "/finance", icon: Landmark, label: "Finances" },
  { href: "/hr", icon: Users, label: "Ressources Humaines" },
  { href: "/providers", icon: Building2, label: "Prestataires" },
  { href: "/projects", icon: FolderKanban, label: "Projets" },
  { href: "/archives", icon: Archive, label: "Archives" },
  { href: "/reports", icon: PieChart, label: "Rapports" },
  { href: "/complaints", icon: MessageSquareWarning, label: "Doléances" },
  { href: "/notifications", icon: Bell, label: "Notifications" },
  { href: "/settings", icon: Settings, label: "Paramètres" },
];

export default function SidebarNavContent() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 p-4 space-y-2">
      <SidebarMenu>
        {navItems.map((item) => (
          <SidebarMenuItem key={item.href}>
            <Link href={item.href}>
              <SidebarMenuButton isActive={pathname === item.href}>
                <item.icon className="h-5 w-5" />
                <span className="lg:text-base">{item.label}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </nav>
  );
}
