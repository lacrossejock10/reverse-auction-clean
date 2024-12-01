'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white shadow mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            VT Reverse Auction
          </Link>

          <div className="flex space-x-8">
            <Link
              href="/dashboard"
              className={`flex items-center ${
                pathname === '/dashboard'
                  ? 'text-primary font-semibold'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              My Requests
              <span className="ml-1 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                2
              </span>
            </Link>

            <Link
              href="/profile"
              className={`${
                pathname === '/profile'
                  ? 'text-primary font-semibold'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Profile
            </Link>

            <Link
              href="/how-it-works"
              className={`${
                pathname === '/how-it-works'
                  ? 'text-primary font-semibold'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              How It Works
            </Link>

            <Link
              href="/supplier"
              className={`${
                pathname === '/supplier'
                  ? 'text-primary font-semibold'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Supplier
            </Link>

            <Link
              href="/analytics"
              className={`${
                pathname === '/analytics'
                  ? 'text-primary font-semibold'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Analytics
            </Link>

            <Link
              href="/messages"
              className={`flex items-center ${
                pathname === '/messages'
                  ? 'text-primary font-semibold'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Messages
              <span className="ml-1 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                1
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
