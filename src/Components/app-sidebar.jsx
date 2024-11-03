import {
  Bot,
  CookingPot,
  Globe,
  HeartPulse,
  Timer,
  Utensils,
  Vegan,
  Weight,
} from "lucide-react";

import { NavMain } from "./nav-main";

import { TeamSwitcher } from "./team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  useSidebar,
} from "./ui/sidebar";

// This is sample data.

export function AppSidebar({props,data,onSubCategoryClick}) {

  return (
    <Sidebar variant="inset" collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} onSubCategoryClick={onSubCategoryClick} />
      </SidebarContent>
    </Sidebar>
  );
}
