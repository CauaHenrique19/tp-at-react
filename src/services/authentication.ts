import { redirect } from "react-router-dom";
import { AuthResponse } from "@supabase/supabase-js";
import { mainPath } from "../routes";

const signUp = async (
  email: string,
  password: string,
  supabase: any
): Promise<AuthResponse> => {
  return await supabase.auth.signUp({
    email,
    password,
  });
};

const signIn = async (
  email: string,
  password: string,
  supabase: any
): Promise<AuthResponse> => {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
};

const isAuthenticated = () => {
  const session = localStorage.getItem("session");

  if (session) throw redirect("/");
  return null;
};

const handleVerificationProtected = () => {
  const session = localStorage.getItem("session");

  if (!session) throw redirect(`/${mainPath}/signin`);
  return null;
};

const logout = async (navigate: any, supabase: any) => {
  await supabase.auth.signOut();
  const loginRouter = `/${mainPath}/signin`;

  localStorage.clear();
  if (navigate) {
    navigate(loginRouter);
  } else {
    window.location.href = loginRouter;
  }
};

export { isAuthenticated, handleVerificationProtected, signUp, signIn, logout };