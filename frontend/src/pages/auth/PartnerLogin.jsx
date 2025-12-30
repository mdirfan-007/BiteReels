import React, { useState } from 'react'
import AuthLayout from '../../components/AuthLayout'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const PartnerLogin = () => {
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
    const response = await axios.post('http://localhost:3000/api/auth/foodpartner/login', {
      email: formData.email,
      password: formData.password
    }, {
      withCredentials: true
    })
    console.log(response.data)
    navigate('/create-food')
  }

 

  return (
    <AuthLayout title="Partner sign in" subtitle="Access your partner dashboard">
      <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm text-[var(--muted)] mb-1">Email</label>
          <input name="email" value={formData.email} onChange={handlechange} className="w-full input-field" placeholder="owner@example.com" />
        </div>
        <div>
          <label className="block text-sm text-[var(--muted)] mb-1">Password</label>
          <input name="password" value={formData.password} onChange={handlechange} type="password" className="w-full input-field" placeholder="••••••••" />
        </div>

        <button className="btn-primary w-full">Sign in</button>

        <div className="text-center text-sm text-[var(--muted)]">
          New partner? <Link to="/auth/partner/register" className="text-[var(--accent)]">Create account</Link>
        </div>
      </form>
    </AuthLayout>
  )
}

export default PartnerLogin
