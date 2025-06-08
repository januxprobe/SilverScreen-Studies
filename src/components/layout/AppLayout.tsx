
'use client';

import type React from "react";
import Link from "next/link";
import { Github, User, LogOut, LogIn, UserPlus } from "lucide-react"; // Changed SignIn to LogIn

import { SidebarProvider, Sidebar, SidebarTrigger, SidebarHeader, SidebarContent, SidebarInset, SidebarFooter, useSidebar } from "@/components/ui/sidebar";
import SidebarNav from "@/components/layout/SidebarNav";
import Logo from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";


interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const { user, logOut, loading } = useAuth();
  const { toast } = useToast();
  // const { state: sidebarState } = useSidebar(); // Not needed if not directly used for logic

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
        <SidebarFooter className="p-2 border-t border-sidebar-border mt-auto flex flex-col gap-2">
          {loading ? (
            <>
              <div className="flex items-center gap-2 p-2 group-data-[collapsible=icon]:justify-center">
                <Skeleton className="h-7 w-7 rounded-full group-data-[collapsible=icon]:h-6 group-data-[collapsible=icon]:w-6" />
                <div className="group-data-[collapsible=icon]:hidden flex flex-col gap-1 w-full">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
               <div className="group-data-[collapsible=icon]:hidden text-center text-xs text-sidebar-foreground/60">
                © {new Date().getFullYear()} UXprobe NV
              </div>
            </>
          ) : user ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full flex items-center justify-start p-2 h-auto group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:size-10 group-data-[collapsible=icon]:p-0 hover:bg-sidebar-accent"
                  >
                    <Avatar className="h-7 w-7 group-data-[collapsible=icon]:h-6 group-data-[collapsible=icon]:w-6">
                      {user.photoURL && <AvatarImage src={user.photoURL} alt={user.displayName || user.email || 'User'} />}
                      <AvatarFallback className="bg-sidebar-accent text-sidebar-accent-foreground text-xs">
                        {user.displayName ? user.displayName.charAt(0).toUpperCase() : (user.email ? user.email.charAt(0).toUpperCase() : <User className="h-4 w-4" />)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-2 group-data-[collapsible=icon]:hidden flex flex-col items-start overflow-hidden">
                      <span className="text-sm font-medium text-sidebar-foreground truncate max-w-[calc(100%-10px)]">
                        {user.displayName || user.email}
                      </span>
                      {user.displayName && user.email && (
                         <span className="text-xs text-sidebar-foreground/70 truncate max-w-[calc(100%-10px)]">
                           {user.email}
                         </span>
                      )}
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="top" align="start" className="w-56 mb-1 ml-1 bg-popover text-popover-foreground border-border">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none text-foreground">
                        {user.displayName || "Account"}
                      </p>
                      {user.email && (
                         <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                      )}
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-border" />
                  <DropdownMenuItem
                    onClick={async () => {
                      try {
                        await logOut();
                        toast({ title: 'Logged out successfully.' });
                      } catch (error) {
                        toast({ title: 'Logout failed', description: (error as Error).message, variant: 'destructive' });
                      }
                    }}
                    className="cursor-pointer text-popover-foreground hover:!bg-accent hover:!text-accent-foreground focus:!bg-accent focus:!text-accent-foreground"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
               <div className="group-data-[collapsible=icon]:hidden text-center text-xs text-sidebar-foreground/60">
                © {new Date().getFullYear()} UXprobe NV
              </div>
            </>
          ) : (
            <>
              <div className="group-data-[collapsible=icon]:hidden flex flex-col gap-1.5">
                  <Button variant="outline" size="sm" asChild className="w-full border-sidebar-border hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground">
                      <Link href="/signin" className="flex items-center justify-center gap-2">
                        <LogIn className="h-4 w-4"/> Sign In
                      </Link>
                  </Button>
                   <Button variant="ghost" size="sm" asChild className="w-full hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground">
                      <Link href="/signup" className="flex items-center justify-center gap-2">
                        <UserPlus className="h-4 w-4"/> Sign Up
                      </Link>
                  </Button>
              </div>
              <div className="group-data-[collapsible=icon]:flex hidden items-center justify-center flex-col gap-1.5">
                 <Tooltip>
                    <TooltipTrigger asChild>
                         <Button variant="ghost" size="icon" asChild className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                            <Link href="/signin"><LogIn className="h-4 w-4"/></Link>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right" align="center"><p>Sign In</p></TooltipContent>
                 </Tooltip>
                 <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" asChild className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                            <Link href="/signup"><UserPlus className="h-4 w-4"/></Link>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right" align="center"><p>Sign Up</p></TooltipContent>
                 </Tooltip>
              </div>
               <div className="group-data-[collapsible=icon]:hidden text-center text-xs text-sidebar-foreground/60">
                © {new Date().getFullYear()} UXprobe NV
              </div>
            </>
          )}
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
