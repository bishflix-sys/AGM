"use client"
import type { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar"
import SidebarNav from "@/components/layout/sidebar-nav"
import Header from "@/components/layout/header"

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <SidebarNav />
        <main className="flex-1 flex flex-col">
          <Header />
          <div className="flex-1 bg-muted/40">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
