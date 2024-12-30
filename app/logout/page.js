"use client";

import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/signin");
  };

  return (
    <div>
      <h2>Are you sure you want to log out?</h2>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
