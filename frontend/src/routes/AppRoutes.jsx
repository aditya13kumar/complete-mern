import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import UserRegister from './UserRegister';
import UserLogin from './UserLogin';
import FoodPartnerRegister from './FoodPartnerRegister';
import FoodPartnerLogin from './FoodPartnerLogin';
import Home from '../general/Home';
import CreateFood from '../food-partner/CreateFood';


const Nav = () => (
  <nav className="auth-nav">
    <Link to="/user/register">User Register</Link>
    <Link to="/user/login">User Login</Link>
    <Link to="/partner/register">Partner Register</Link>
    <Link to="/partner/login">Partner Login</Link>
  </nav>
)

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Nav />
      <main className="auth-main">
        <Routes>
          <Route path="/user/register" element={<UserRegister />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/partner/register" element={<FoodPartnerRegister />} />
          <Route path="/partner/login" element={<FoodPartnerLogin />} />
         
          <Route path="/" element={<Home />} />
          <Route path="/createfood" element={<CreateFood />} />

        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default AppRoutes
