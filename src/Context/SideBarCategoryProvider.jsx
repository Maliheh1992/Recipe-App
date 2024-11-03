import React, { createContext, useContext } from "react";

const SidebarCategoryContext = createContext();

export const useSidebarCategory = () => {
  return useContext(SidebarContext);
};

export const SidebarCategoryProvider = ({ children, category }) => {
  return (
    <SidebarCategoryContext.Provider category={category}>
      {children}
    </SidebarCategoryContext.Provider>
  );
};
