import React, { createContext, useContext, useState } from 'react';

// Create a context for the sidebar
const SidebarContext = createContext();

// SidebarProvider component to wrap the application
export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true); // Sidebar open/close state

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use the Sidebar context
export const useSidebar = () => useContext(SidebarContext);