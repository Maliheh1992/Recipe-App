

import { NavMain } from "./nav-main";

import { TeamSwitcher } from "./team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,

} from "./ui/sidebar";
import { NavUser } from "./NavUser";

// This is sample data.

export function AppSidebar({props,data,onSubCategoryClick,selectedFilters,applyFilter,deleteFilter,selectedFiltersCategory}) {


  return (
    <Sidebar variant="inset" collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} onSubCategoryClick={onSubCategoryClick} selectedFilters={selectedFilters} selectedFiltersCategory={selectedFiltersCategory}   />
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser applyFilter={applyFilter} deleteFilter={deleteFilter} selectedFilters={selectedFilters}/>
      </SidebarFooter> */}
    </Sidebar>
  );
}
