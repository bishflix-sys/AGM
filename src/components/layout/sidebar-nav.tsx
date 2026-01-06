import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { AgmLogo } from "@/components/icons";
import SidebarNavContent from "./sidebar-nav-content";


export default function SidebarNav() {
  return (
    <Sidebar className="hidden lg:block border-r">
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <AgmLogo className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl">AGM</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarNavContent />
      </SidebarContent>
    </Sidebar>
  );
}
