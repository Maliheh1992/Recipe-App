import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "./ui/sidebar";

export function NavMain({
  items,
  onSubCategoryClick,
  selectedFiltersCategory,
}) {
  const filteredItems = items.filter((item) => {
    if (selectedFiltersCategory.length === 0) {
      return true; // اگر هیچ فیلتری انتخاب نشده باشد، همه آیتم‌ها نمایش داده شوند
    }

    return item.items.some((subItem) =>
      selectedFiltersCategory.includes(`${item.title}-${subItem.value}`)
    );
  });
  return (
    <SidebarGroup>
      <SidebarMenu>
        {filteredItems.map((item) => (
          <Collapsible key={item.title} asChild className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  <span>{item.icon && <item.icon />}</span>
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="">
                  {item.items?.map((subItem) => {
                    const isSelected = selectedFiltersCategory.includes(
                      `${item.title}-${subItem.value}`
                    );
                    return (
                      <div
                        className="flex flex-wrap items-center gap-y-2 overflow-hidden "
                        key={subItem.label}
                        onClick={() =>
                          onSubCategoryClick(subItem.value, item.title)
                        }
                      >
                        <label
                          htmlFor={subItem.value}
                          className={`h-8 border border-border px-2 py-1  grid rounded-lg cursor-pointer place-items-center select-none has-[:checked]:bg-primary/70 has-[:checked]:text-foreground has-[:checked]:ring-indigo-200 ${
                            isSelected
                              ? "bg-primary/70 text-foreground ring-indigo-200"
                              : ""
                          }`}
                        >
                          {subItem.label}
                          <input
                            type={subItem.type}
                            value={subItem.value}
                            id={subItem.value}
                            className="appearance-none opacity-0 checked:border-foreground"
                          />
                        </label>
                      </div>
                    );
                  })}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
