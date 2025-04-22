'use client'

import { isAuthenticated, logout } from '@/lib/actions/auth.action'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { ReactNode, useEffect, useState } from 'react'
import { LogOut, Power } from 'lucide-react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isRouteLoading, setIsRouteLoading] = useState(false)

  const pathname = usePathname()

  // Track pathname change to trigger loader
  useEffect(() => {
    setIsRouteLoading(true)
    const timeout = setTimeout(() => setIsRouteLoading(false), 500) // simulate route load
    return () => clearTimeout(timeout)
  }, [pathname])

  useEffect(() => {
    const checkAuth = async () => {
      const auth = await isAuthenticated()
      setIsUserAuthenticated(auth)
      if (!auth) window.location.href = '/sign-in' // redirect client-side
    }

    checkAuth()
  }, [])

  const handleLogout = async () => {
    await logout()
    window.location.href = '/sign-in'
  }

  // Loader on auth check or route change
  if (isUserAuthenticated === null || isRouteLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid'></div>
      </div>
    )
  }

  return (
    <div className='root-layout'>
      <nav className='flex justify-between items-center px-4 py-2'>
        <Link href='/' className='flex items-center gap-2'>
          <Image src='/logo.svg' alt='Logo' width={38} height={32} />
          <h2 className='text-primary-100'>PrepWise</h2>
        </Link>

        <button
          onClick={handleLogout}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className='flex items-center gap-2 text-sm px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-all w-[120px] h-[40px]'
        >
          {isHovered ? <Power size={18} /> : <LogOut size={18} />}
          Logout
        </button>
      </nav>

      {children}
    </div>
  )
}

export default RootLayout
