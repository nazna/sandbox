import Link from 'next/link'
import React from 'react'

export function AppBar() {
  return (
    <div className="relative bg-white border-b-2 border-gray-200">
      <div className="max-w-screen-md mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          <Link href="/">
            <a className="text-base leading-6 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
              Home
            </a>
          </Link>
          <Link href="/books">
            <a className="text-base leading-6 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
              Books
            </a>
          </Link>
          <Link href="/authors">
            <a className="text-base leading-6 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
              Authors
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
