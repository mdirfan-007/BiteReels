import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import UserRegister from "../pages/auth/UserRegister";
import UserLogin from "../pages/auth/UserLogin";
import PartnerRegister from "../pages/auth/PartnerRegister";
import PartnerLogin from "../pages/auth/PartnerLogin";
import AuthOptions from "../pages/auth/AuthOptions";
import Home from "../general/Home";
import CreateFood from "../general/CreateFood";
import Profile from "../general/Profile";

const Approutes = () => {
  return (
    <div>
      <Routes>
        {/* Home / quick links */}
        <Route
          path="/"
          element={
            <div className="min-h-screen flex items-center justify-center p-6">
              <div className="w-full max-w-2xl auth-card p-8 text-center">
                <h1 className="text-2xl font-semibold mb-2">Welcome to BiteReels</h1>
                <p className="text-sm text-[var(--muted)] mb-6">Choose how you'd like to join</p>

                <div className="flex gap-4 justify-center">
                  <Link to="/auth/user/register" className="btn-primary px-6 py-3">Register as User</Link>
                  <Link to="/auth/partner/register" className="btn-ghost px-6 py-3 border">Register as Partner</Link>
                </div>

                <div className="mt-4 text-sm text-[var(--muted)]">
                  Or visit <Link to="/auth" className="text-[var(--accent)]">auth options</Link>
                </div>
              </div>
            </div>
          }
        />

        {/* Auth routes */}
        <Route path="/auth" element={<AuthOptions />} />

        <Route path="/auth/user/register" element={<UserRegister />} />
        <Route path="/auth/user/login" element={<UserLogin />} />

        <Route path="/auth/partner/register" element={<PartnerRegister />} />
        <Route path="/auth/partner/login" element={<PartnerLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-food" element={<CreateFood />} />
        <Route path="/food-partner/:id" element={<Profile />} />

      </Routes>
    </div>
  );
};

export default Approutes;
