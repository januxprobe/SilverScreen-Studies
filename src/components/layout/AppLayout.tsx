
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarHeader, SidebarContent, SidebarInset, SidebarFooter } from "@/components/ui/sidebar";
import SidebarNav from "@/components/layout/SidebarNav";
import Logo from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from "lucide-react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider defaultOpen>
      <Sidebar variant="sidebar" collapsible="icon" side="left">
        <SidebarHeader className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <Logo />
            <h1 className="text-xl font-headline font-semibold text-sidebar-foreground group-data-[collapsible=icon]:hidden">
              SilverScreen Studies
            </h1>
          </div>
        </SidebarHeader>
        <SidebarContent className="p-2">
          <SidebarNav />
        </SidebarContent>
        <SidebarFooter className="p-4 border-t border-sidebar-border mt-auto">
          <div className="group-data-[collapsible=icon]:hidden text-xs text-sidebar-foreground/70">
            © {new Date().getFullYear()} UXprobe NV
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-md md:justify-end">
          <SidebarTrigger className="md:hidden" />
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/FirebaseExtended/ai-apps" target="_blank">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub Repository</span>
            </Link>
          </Button>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
