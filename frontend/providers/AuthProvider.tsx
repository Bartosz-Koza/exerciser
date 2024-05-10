"use client";

import { login as apiLogin, resumeSession, register as apiSignUp, removeTokens } from "@/lib/api";
import { queryClient } from "./ReactQueryProvider";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { User } from "@/lib/types";

export function useUser() {
  const { data } = useSuspenseQuery({
    queryKey: ["user"],
    queryFn: resumeSession,
    staleTime: Infinity,
  });

  return data;
}

export async function signUp(body: any): Promise<User | null> {
  const user = await apiSignUp(body);
  queryClient.setQueryData(["user"], user);
  return user;
}

export async function login(body: any): Promise<User | null> {
  const user = await apiLogin(body);
  queryClient.setQueryData(["user"], user);
  return user;
}

export function logout() {
  removeTokens();
  queryClient.setQueryData(["user"], null);
}

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isPending } = useQuery({
    queryKey: ["user"],
    queryFn: resumeSession,
    staleTime: Infinity,
  });

  if (isPending) {
    return <h1>loading</h1>;
  }

  return children;
}
