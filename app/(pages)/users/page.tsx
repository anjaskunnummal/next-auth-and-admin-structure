"use client"
import withAuth from '@/components/withAuth';
import React from 'react'
 function page() {
  return (
    <div>users</div>
  )
}

// export default page
export default withAuth(page,['2']);
