import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/auth.css'
import axios from 'axios'


const FoodPartnerLogin = () => {
           
  const navigate =  useNavigate();

  const submithandle = async(e)=>{
    e.preventDefault();

    const businessemail = e.target.businessemail.value;
    const password = e.target.password.value;

    await axios.post("http://localhost:4000/api/auth/partner/login", {
      businessemail,
      password
    },{withCredentials:true})

    navigate("/")




  }
  return (
    <section className="auth-card" aria-labelledby="partner-login">
      <header className="auth-header">
        <h1 id="partner-login" className="auth-title">Partner sign in</h1>
        <p className="auth-sub">Access your partner dashboard.</p>
      </header>

      <form className="auth-form" onSubmit={submithandle}>
        <div className="form-row">
          <label>Business email</label>
          <input name='businessemail' type="email" placeholder="contact@business.com" />
        </div>

        <div className="form-row">
          <label>Password</label>
          <input name='password' type="password" placeholder="••••••••" />
        </div>

        <div className="actions">
          <button type="submit" className="btn btn-primary">Sign in</button>
          <button type="button" className="btn btn-ghost">Help</button>
        </div>
        <p className="muted" style={{marginTop:8}}>
          Don't have an account? <Link to="/partner/register">Register foodpartner
          </Link>
        </p>
      </form>
    </section>
  )
}

export default FoodPartnerLogin
