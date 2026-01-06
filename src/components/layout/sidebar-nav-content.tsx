// This component is created to avoid repetition between sidebar-nav.tsx and header.tsx for mobile view
"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation'
import {
  Archive,
  Building2,
  FileText,
  KanbanSquare,
  Landmark,
  LayoutDashboard,
  MapPin,
  Users,
} from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", icon: LayoutDashboard, label: "Tableau de bord" },
  { href: "/civil-status", icon: FileText, label: "État Civil" },
  { href: "/land", icon: MapPin, label: "Gestion Foncière" },
  { href: "/finance", icon: Landmark, label: "Finances" },
  { href: "/hr", icon: Users, label: "Ressources Humaines" },
  { href: "/projects", icon: KanbanSquare, label: "Suivi de Projets" },
  { href: "/citizen-services", icon: Building2, label: "Services Citoyens" },
  { href: "/archives", icon: Archive, label: "Courrier & Archives" },
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
