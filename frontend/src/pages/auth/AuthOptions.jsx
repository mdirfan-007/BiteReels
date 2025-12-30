import React from 'react'
import AuthLayout from '../../components/AuthLayout'
import { Link } from 'react-router-dom'

const AuthOptions = () => {
  return (
    <AuthLayout title="Get started" subtitle="Choose how you'd like to join FoodView">
      <div className="mt-4 space-y-4">
        <div className="grid gap-3">
          <Link to="/auth/user/register" className="btn-primary w-full text-center py-3">Register as User</Link>
          <Link to="/auth/partner/register" className="btn-ghost w-full text-center py-3 border">Register as Food Partner</Link>
        </div>

        <div className="text-center text-sm text-[var(--muted)] mt-2">
          Already have an account? <Link to="/auth/user/login" className="text-[var(--accent)]">Sign in</Link>
        </div>
      </div>
    </AuthLayout>
  )
}

export default AuthOptions
