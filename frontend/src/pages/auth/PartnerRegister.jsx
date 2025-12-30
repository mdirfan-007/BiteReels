import React, { useState } from 'react'
import AuthLayout from '../../components/AuthLayout'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const PartnerRegister = () => {
  const navigate = useNavigate()
const [formData, setFormData] = useState({
    businessName: "",
    fullname: "",
    email: "",
    password: "",
  });

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
        businessName: "",
        fullname: "",
        email: "",
        password: ""
      })
      const response = await axios.post('http://localhost:3000/api/auth/foodpartner/register', {
        businessName: formData.businessName,
        fullname: formData.fullname,
        email: formData.email,
        password: formData.password},{
          withCredentials: true,
        })
      console.log(response.data)
      
      navigate('/create-food')
  }


  return (
    <AuthLayout title="Partner sign up" subtitle="Register your food business">
      <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm text-[var(--muted)] mb-1">Business name</label>
          <input name="businessName" value={formData.businessName} onChange={handlechange} className="w-full input-field" placeholder="Joe's Burgers" />
        </div>
        <div>
          <label className="block text-sm text-[var(--muted)] mb-1">Owner name</label>
          <input name="fullname" value={formData.fullname} onChange={handlechange} className="w-full input-field" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm text-[var(--muted)] mb-1">Email</label>
          <input name="email" value={formData.email} onChange={handlechange} className="w-full input-field" placeholder="owner@example.com" />
        </div>
        <div>
          <label className="block text-sm text-[var(--muted)] mb-1">Password</label>
          <input name="password" value={formData.password} onChange={handlechange} type="password" className="w-full input-field" placeholder="••••••••" />
        </div>

        <button className="btn-primary w-full">Create partner account</button>

        <div className="text-center text-sm text-[var(--muted)]">
          Already partnered? <Link to="/auth/partner/login" className="text-[var(--accent)]">Sign in</Link>
        </div>
      </form>
    </AuthLayout>
  )
}

export default PartnerRegister
