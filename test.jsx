import React, { useState } from 'react';
import {
  Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuSub,
  SidebarMenuButton, Collapsible, CollapsibleTrigger, CollapsibleContent, Button, Avatar, AvatarFallback
} from 'your-component-library';
import { ChevronRight, FcClearFilters } from 'your-icon-library';

export default function FilterSidebar({ data, onSubCategoryClick }) {
  // State برای ذخیره فیلترهای انتخاب‌شده
  const [selectedFilters, setSelectedFilters] = useState({});
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [isApplied, setIsApplied] = useState(false);

  // مدیریت تغییرات چک‌باکس‌ها
  const handleCheckboxChange = (subItem, categoryTitle) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [categoryTitle]: prevFilters[categoryTitle] === subItem.value ? null : subItem.value
    }));
  };

  // تابع Apply برای اعمال فیلترها
  const handleApply = () => {
    const results = []; // نتیجه‌ها را بر اساس selectedFilters فیلتر کنید
    setFilteredRecipes(results);
    setIsApplied(true);
  };

  // تابع Clear برای پاکسازی فیلترها
  const handleClear = () => {
    setSelectedFilters({});
    setFilteredRecipes([]);
    setIsApplied(false);
  };

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      
      <SidebarContent>
        <NavMain items={data.navMain} onSubCategoryClick={onSubCategoryClick} selectedFilters={selectedFilters} onCheckboxChange={handleCheckboxChange} />
        
        {isApplied && (
          <div className="filtered-content">
            {/* نمایش نتایج فیلترشده */}
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe, index) => (
                <div key={index}>{recipe.name}</div>
              ))
            ) : (
              <div>No results found</div>
            )}
          </div>
        )}
      </SidebarContent>
      
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex justify-between w-full">
              <Button variant="secondary" onClick={handleClear} className="border border-red-400">
                Clear
              </Button>
              <Button onClick={handleApply}>
                Apply
              </Button>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

// کامپوننت NavMain
function NavMain({ items, selectedFilters, onCheckboxChange }) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
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
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <div className="flex items-center gap-y-2 overflow-hidden" key={subItem.label}>
                      <label
                        htmlFor={subItem.value}
                        className={`h-8 px-2 py-1 rounded-lg cursor-pointer ${selectedFilters[item.title] === subItem.value ? 'bg-primary/70 text-foreground' : ''}`}
                      >
                        {subItem.label}
                        <input
                          type={subItem.type}
                          value={subItem.value}
                          id={subItem.value}
                          checked={selectedFilters[item.title] === subItem.value}
                          onChange={() => onCheckboxChange(subItem, item.title)}
                          className="appearance-none opacity-0"
                        />
                      </label>
                    </div>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
