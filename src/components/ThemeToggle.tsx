import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-xl border border-primary/20 hover:bg-primary/10 transition-all duration-300 group"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            theme === 'dark' 
              ? 'rotate-0 scale-100 text-yellow-400' 
              : 'rotate-90 scale-0 text-yellow-400'
          }`}
        />
        <Moon 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            theme === 'light' 
              ? 'rotate-0 scale-100 text-blue-400' 
              : '-rotate-90 scale-0 text-blue-400'
          }`}
        />
      </div>
      
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-yellow-400/20 shadow-lg shadow-yellow-400/25' 
          : 'bg-blue-400/20 shadow-lg shadow-blue-400/25'
      } opacity-0 group-hover:opacity-100`} />
    </Button>
  );
};

export default ThemeToggle;
