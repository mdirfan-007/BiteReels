import React, { useState } from "react";
import AuthLayout from "../../components/AuthLayout";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(formData);
    setFormData({
      fullname: "",
      email: "",
      password: "",
    });
    const response = await axios.post("http://localhost:3000/api/auth/user/register", {
        fullname: formData.fullname,
        email: formData.email,
        password: formData.password,

    

      },{
        withCredentials: true,
      });
       console.log("Response from server:", response.data);
  navigate("/home");
  };
 

  const handlechange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <AuthLayout title="Create an account" subtitle="Sign up as a Food Lover">
      <form className="space-y-4 mt-4" onSubmit={handleRegister}>
        <div>
          <label className="block text-sm text-[var(--muted)] mb-1">
            Full name
          </label>
          <input
            name="fullname"
            onChange={handlechange}
            value={formData.fullname}
            className="w-full input-field"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm text-[var(--muted)] mb-1">
            Email
          </label>
          <input
            name="email"
            onChange={handlechange}
            value={formData.email}
            className="w-full input-field"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm text-[var(--muted)] mb-1">
            Password
          </label>
          <input
            name="password"
            onChange={handlechange}
            value={formData.password}
            type="password"
            className="w-full input-field"
            placeholder="••••••••"
          />
        </div>

        <button className="btn-primary w-full">Create account</button>

        <div className="text-center text-sm text-[var(--muted)]">
          Already have an account?{" "}
          <Link to="/auth/user/login" className="text-[var(--accent)]">
            Sign in
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default UserRegister;
