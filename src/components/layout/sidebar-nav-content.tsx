'use client';
// This component is created to avoid repetition between sidebar-nav.tsx and header.tsx for mobile view

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
} from 'lucide-react';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

const navItems = [
  { href: '/', icon: LayoutDashboard, label: 'Tableau de bord' },
  { href: '/civil-status', icon: FileText, label: 'État Civil' },
  { href: '/land', icon: MapPin, label: 'Foncier' },
  { href: '/urbanisme', icon: Building, label: 'Urbanisme' },
  { href: '/deliberations', icon: Gavel, label: 'Délibérations' },
  { href: '/finance', icon: Landmark, label: 'Finances' },
  { href: '/hr', icon: Users, label: 'Ressources Humaines' },
  { href: '/providers', icon: Building2, label: 'Prestataires' },
  { href: '/projects', icon: FolderKanban, label: 'Projets' },
  { href: '/archives', icon: Archive, label: 'Archives' },
  { href: '/reports', icon: PieChart, label: 'Rapports' },
  { href: '/complaints', icon: MessageSquareWarning, label: 'Doléances' },
  { href: '/notifications', icon: Bell, label: 'Notifications' },
  { href: '/settings', icon: Settings, label: 'Paramètres' },
];

// --- Role-Based Access Control (RBAC) Simulation ---
// Based on the provided organizational chart.

const ROLES = {
  MAIRE: 'maire',
  SECRETAIRE_MUNICIPAL: 'secretaire_municipal',
  AGENT_ETAT_CIVIL: 'agent_etat_civil',
  AGENT_FINANCES: 'agent_finances',
  AGENT_TECHNIQUE: 'agent_technique',
  AGENT_RH: 'agent_rh',
};

// Define which navigation items are visible for each role.
const permissions = {
  [ROLES.MAIRE]: navItems.map(item => item.href), // Full access
  [ROLES.SECRETAIRE_MUNICIPAL]: navItems.map(item => item.href), // Full access
  [ROLES.AGENT_ETAT_CIVIL]: [
    '/',
    '/civil-status',
    '/archives',
    '/notifications',
    '/settings',
  ],
  [ROLES.AGENT_FINANCES]: [
    '/',
    '/finance',
    '/providers',
    '/reports',
    '/notifications',
    '/settings',
  ],
  [ROLES.AGENT_TECHNIQUE]: [
    '/',
    '/land',
    '/urbanisme',
    '/projects',
    '/notifications',
    '/settings',
  ],
  [ROLES.AGENT_RH]: ['/', '/hr', '/notifications', '/settings'],
};

// For demonstration, we'll simulate the currently logged-in user's role.
// In a real application, this would come from the authentication state.
const currentUserRole = ROLES.AGENT_ETAT_CIVIL;

// --- End of RBAC Simulation ---

export default function SidebarNavContent() {
  const pathname = usePathname();

  // Filter navigation items based on the current user's role
  const visibleNavItems = navItems.filter(item =>
    permissions[currentUserRole]?.includes(item.href)
  );

  return (
    <nav className="flex-1 p-4 space-y-2">
      <SidebarMenu>
        {visibleNavItems.map(item => (
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
