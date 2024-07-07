"use client"
import withAuth from '@/components/withAuth';
import React from 'react'

function Dashboard() {
  return (
    <>
    <div>dashboard page</div>
    </>

  )
}

// export default Dashboard
export default withAuth(Dashboard,['1']);