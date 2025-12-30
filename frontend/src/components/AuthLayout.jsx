import React from 'react'
import { Link } from 'react-router-dom'

const AuthLayout = ({title, subtitle, children, footer}) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md auth-card p-8">
        <header className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-md bg-[var(--accent)] flex items-center justify-center text-white font-bold">FV</div>
            <div>
              <h1 className="text-lg font-semibold">FoodView</h1>
              <p className="text-sm text-[var(--muted)]">{subtitle}</p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold">{title}</h2>
        </header>

        <main>{children}</main>

        {footer && (
          <footer className="mt-6 text-sm text-[var(--muted)]">
            {footer}
          </footer>
        )}

      </div>
    </div>
  )
}

export default AuthLayout
