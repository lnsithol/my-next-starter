"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  //Some server logic
  await signOut();
};
