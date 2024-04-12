import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle:React.FC = () => {
  const theme = useTheme();
  const isDarkMode=theme?.isDarkMode ?? false;
  const toggleTheme=theme?.toggleTheme ?? (()=>{})

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="toggle-button"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <MoonIcon className="icon" />
      ) : (
        <SunIcon className="icon" />
      )}
    </button>
  );
};

export default ThemeToggle;