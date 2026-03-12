'use client'

import React from 'react'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-2 text-lg font-bold">
            <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>My App</span>
          </a>
          <nav className="flex items-center gap-4">
            <a href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">Home</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Build your next{' '}
              <span className="text-indigo-600">web app</span>{' '}
              in minutes
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A clean full-stack starter with Next.js, Tailwind CSS, Prisma, and PostgreSQL — ready to customize.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need
            </h2>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Lightning Fast', desc: 'Built on Next.js with React Server Components for optimal performance.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                { title: 'Database Ready', desc: 'Prisma ORM with PostgreSQL — type-safe queries and easy migrations.', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4' },
                { title: 'Deploy Anywhere', desc: 'Docker-ready with GitHub Actions CI/CD — push to main and ship.', icon: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' },
              ].map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
                    <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            Built with VibeCoder
          </p>
        </div>
      </footer>
    </div>
  )
}
