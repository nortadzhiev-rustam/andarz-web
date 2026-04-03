"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export function useAuthState() {
  const { isAuthenticated, isLoading, user } = useAuth();
  return { isAuthenticated, isLoading, user };
}

/**
 * Redirects unauthenticated users to the login page.
 * Use this hook in pages that require authentication.
 */
export function useAuthGuard(redirectTo = "/login") {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace(redirectTo);
    }
  }, [isAuthenticated, isLoading, redirectTo, router]);

  return { isAuthenticated, isLoading, user };
}
