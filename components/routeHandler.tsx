"use client"
import { useEffect } from "react";
import { useRouter } from 'next/navigation'

const Routes = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token === '1') {
      router.push("/dashboard");
    } else {
      router.push("/sign-in");
    }
  }, [router]);

  return null;
};

export default Routes;
