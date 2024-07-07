"use client"
import Link from "next/link";
import React from "react";

import { redirect, useRouter } from "next/navigation";
import { navigatePath } from "@/components/withAuth";

export default function SignIn() {
    const router = useRouter();
    const moveDashboard = (()=>{
        localStorage.setItem("users", JSON.stringify(['2','1']));


        let nav =  navigatePath()
        router.push(nav)
    //    let nav =  navigatePath()
        // return(
        //     <>
        //     <Link href="/sign-up"></Link>
        //     </>
        // )
    })
    return (
        <>
        <h1 style={{background:"red",width:"500px",height:"500px",color:"black"}}>Sign in page</h1>
        {/* <Link href="/dashboard">signin</Link> */}
        <button onClick={moveDashboard}>Sign</button>
        </>
    )

}