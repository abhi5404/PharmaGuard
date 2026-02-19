import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    isDark: true,
    toggleTheme: () => { },
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Dark mode is permanent — always apply the dark class
    useEffect(() => {
        document.documentElement.classList.add('dark');
        document.body.classList.remove('light');
        localStorage.setItem('pg_theme', 'dark');
    }, []);

    return (
        <ThemeContext.Provider value={{ isDark: true, toggleTheme: () => { } }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
