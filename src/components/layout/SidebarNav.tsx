
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, type NavItem } from '@/lib/app-constants';
import { cn } from '@/lib/utils';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from '@/components/ui/sidebar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown } from 'lucide-react';

export default function SidebarNav() {
  const pathname = usePathname();

  const renderNavItem = (item: NavItem, isSubItem = false) => {
    const isActive = item.subItems ? pathname.startsWith(item.href) : pathname === item.href;
    const Icon = item.icon;

    if (item.subItems && item.subItems.length > 0) {
      return (
        <AccordionItem value={item.title} className="border-b-0" key={item.title}>
          <AccordionTrigger
            className={cn(
              "flex w-full items-center gap-2 rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8 group-data-[collapsible=icon]:p-2",
              isActive && "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90",
              "group-data-[collapsible=icon]:justify-center"
            )}
          >
            <div className="flex items-center gap-2 group-data-[collapsible=icon]:w-full group-data-[collapsible=icon]:justify-center">
              <Icon className="h-4 w-4 shrink-0" />
              <span className="truncate group-data-[collapsible=icon]:hidden">{item.title}</span>
            </div>
            {/* Chevron is part of AccordionTrigger by default, remove custom one to avoid duplication if it adds another */}
          </AccordionTrigger>
          <AccordionContent className="pb-0 group-data-[collapsible=icon]:hidden">
            <SidebarMenuSub className="ml-0 border-l-0 pl-1.5 pt-1">
              {item.subItems.map((subItem) => (
                <SidebarMenuSubItem key={subItem.href}>
                  <Link href={subItem.href}>
                    <SidebarMenuSubButton
                      isActive={pathname === subItem.href}
                      className="gap-2 justify-start"
                      aria-label={subItem.label || subItem.title}
                    >
                      {subItem.icon && <subItem.icon className="h-3.5 w-3.5 shrink-0" />}
                      <span>{subItem.label || subItem.title}</span>
                    </SidebarMenuSubButton>
                  </Link>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </AccordionContent>
        </AccordionItem>
      );
    }

    return (
      <SidebarMenuItem key={item.href}>
        <Link href={item.href}>
          <SidebarMenuButton 
            isActive={isActive}
            tooltip={{children: item.title, className: "group-data-[collapsible=expanded]:hidden"}}
            aria-label={item.title}
            className="group-data-[collapsible=icon]:justify-center"
          >
            <Icon className="h-4 w-4 shrink-0" />
            <span className="truncate group-data-[collapsible=icon]:hidden">{item.title}</span>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    );
  };
  
  return (
    <nav>
      <SidebarMenu>
        <Accordion type="multiple" className="w-full">
          {NAV_ITEMS.map((item) => renderNavItem(item))}
        </Accordion>
      </SidebarMenu>
    </nav>
  );
}
