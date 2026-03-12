import Link from 'next/link'
import { Rocket } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <Rocket className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          <span>My App</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            Home
          </Link>
        </nav>
      </div>
    </header>
  )
}
