import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface ThemeContextType {
    isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
    isDark: true,
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    useEffect(() => {
        document.documentElement.classList.add('dark');
        document.body.classList.remove('light');
        localStorage.setItem('pg_theme', 'dark');
    }, []);

    return (
        <ThemeContext.Provider value={{ isDark: true }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
