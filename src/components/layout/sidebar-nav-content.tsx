'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
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
  AGENT_ADMIN_FINANCES: 'agent_admin_finances',
  AGENT_ETAT_CIVIL: 'agent_etat_civil',
  AGENT_TECHNIQUE: 'agent_technique',
  AGENT_PLANIFICATION: 'agent_planification',
};

const allPermissions = navItems.map(item => item.href);

// Define which navigation items are visible for each role.
const permissions: Record<string, string[]> = {
  [ROLES.MAIRE]: allPermissions,
  [ROLES.SECRETAIRE_MUNICIPAL]: allPermissions,
  [ROLES.AGENT_ADMIN_FINANCES]: [
    '/',
    '/finance',
    '/hr',
    '/providers',
    '/reports',
    '/notifications',
    '/settings',
  ],
  [ROLES.AGENT_ETAT_CIVIL]: [
    '/',
    '/civil-status',
    '/archives',
    '/notifications',
    '/settings',
  ],
  [ROLES.AGENT_TECHNIQUE]: [
    '/',
    '/land',
    '/urbanisme',
    '/projects',
    '/complaints',
    '/notifications',
    '/settings',
  ],
  [ROLES.AGENT_PLANIFICATION]: [
    '/',
    '/projects',
    '/reports',
    '/complaints',
    '/notifications',
    '/settings',
  ],
};

// --- End of RBAC Simulation ---

export default function SidebarNavContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // In a real application, this would come from the authentication state after login.
  // Here, we simulate it using a URL parameter for demonstration.
  // Default to a restricted role if no parameter is provided.
  const roleFromUrl = searchParams.get('role');
  const currentUserRole = roleFromUrl && Object.values(ROLES).includes(roleFromUrl) 
    ? roleFromUrl 
    : ROLES.AGENT_ETAT_CIVIL;


  // Filter navigation items based on the current user's role
  const visibleNavItems = navItems.filter(item =>
    permissions[currentUserRole]?.includes(item.href)
  );

  return (
    <nav className="flex-1 p-4 space-y-2">
      <SidebarMenu>
        {visibleNavItems.map(item => (
          <SidebarMenuItem key={item.href}>
            <Link href={`${item.href}${item.href === '/' ? `?role=${currentUserRole}`: `?role=${currentUserRole}`}`}>
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
