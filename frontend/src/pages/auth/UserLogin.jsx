import React, { useState } from 'react'
import AuthLayout from '../../components/AuthLayout'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const UserLogin = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handlechange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormData({
        email: '',
        password: ''
      })
      const response = await axios.post('http://localhost:3000/api/auth/user/login', {
        email: formData.email,
        password: formData.password},{
          withCredentials: true,
        })
      console.log(response.data)
      
      navigate('/home')
  }

  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to your account">
      <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm text-[var(--muted)] mb-1">Email</label>
          <input name="email" value={formData.email} onChange={handlechange} className="w-full input-field" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm text-[var(--muted)] mb-1">Password</label>
          <input name="password" value={formData.password} onChange={handlechange} type="password" className="w-full input-field" placeholder="••••••••" />
        </div>

        <button className="btn-primary w-full">Sign in</button>

        <div className="text-center text-sm text-[var(--muted)]">
          New here? <Link to="/auth/user/register" className="text-[var(--accent)]">Create an account</Link>
        </div>
      </form>
    </AuthLayout>
  )
}

export default UserLogin
