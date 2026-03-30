"use client";

import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return session ? (
    <p>Welcome {session.user?.name}</p>
  ) : (
    <p>Not logged in</p>
  );
}