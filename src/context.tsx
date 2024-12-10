/// <reference types="vite/types/importMeta.d.ts" />

import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { createClient } from "@supabase/supabase-js";
import { useTranslation } from "react-i18next";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import { AppContextInterface } from "./interfaces";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./themes";

dayjs.extend(utc);
dayjs.extend(timezone);

const AppContext = createContext<AppContextInterface | null>(null);

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_API_KEY!
);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const { t, i18n } = useTranslation();
  let storedLanguage = localStorage.getItem("language");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  const getUser = () => {
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      return null;
    }
    return JSON.parse(userStr);
  };

  let user = getUser();
  const [userState, setUser] = useState(user);

  useEffect(() => {
    storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      changeLanguage(storedLanguage);
    } else {
      const navLang = navigator.language.split("-")[0];
      changeLanguage(navLang);
    }
  }, [i18n]);

  const sharedState: AppContextInterface = {
    supabase,
    changeLanguage,
    t,
    storedLanguage,
    setUser,
    user: userState,
  };

  return (
    <AppContext.Provider value={sharedState}>
      <ThemeProvider theme={darkTheme } >
        <CssBaseline />
        { children }
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default AppProvider;
