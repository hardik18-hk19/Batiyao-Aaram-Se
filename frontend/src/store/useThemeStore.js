import { create } from "zustand";

// Initialize theme on HTML element
const initializeTheme = () => {
  const savedTheme = localStorage.getItem("chat-theme") || "luxury";
  document.documentElement.setAttribute("data-theme", savedTheme);
  return savedTheme;
};

export const useThemeStore = create((set) => ({
  theme: initializeTheme(),
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    // Update the HTML element's data-theme attribute
    document.documentElement.setAttribute("data-theme", theme);
    set({ theme });
  },
}));
