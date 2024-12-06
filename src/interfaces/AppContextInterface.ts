import { SupabaseClient } from "@supabase/supabase-js";
import IUser from "./User";

export default interface AppContextInterface {
  supabase: SupabaseClient;
  changeLanguage: (lng: string) => void;
  t: (key: string) => string;
  storedLanguage: string | null;
  user: IUser | null;
}