"use client"
import React, { useEffect, useState } from "react";
import "../app/globals.css"
import Link from "next/link";
export default function Navbar() {

  const [user,setuser] = useState<any>(null)

  useEffect(()=>{
    let val = localStorage.getItem("users")
    setuser(val)
  },[])

  return (
    <>
      <div
        className="flex gap-10 bg-gray-950 w-full h-12 text-white cursor-pointer font-extrabold gap-40 p-12"
      >
        {user?.length &&user?.includes("1") && <div><Link href="/dashboard">Home</Link></div>}
        
        {user?.length &&user?.includes("2") && <div><Link href="/users">Users</Link></div>}
  
        <div><Link href="/sign-in">Logout</Link></div>
      </div>
    </>
  );
}
