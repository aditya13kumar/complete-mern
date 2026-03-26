import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'

const FoodPartnerRegister = () => {
  return (
    <section className="auth-card" aria-labelledby="partner-register">
      <header className="auth-header">
        <h1 id="partner-register" className="auth-title">Partner signup</h1>
        <p className="auth-sub">Register your food partner account.</p>
      </header>

      <form className="auth-form">
        <div className="form-row">
          <label>Business name</label>
          <input type="text" placeholder="Joe's Deli" />
        </div>

        <div className="form-row">
          <label>Contact name</label>
          <input type="text" placeholder="Contact person" />
        </div>

        <div className="form-row two-cols">
          <div className="form-col">
            <label>Contact email</label>
            <input type="email" placeholder="contact@business.com" />
          </div>
          <div className="form-col">
            <label>Phone number</label>
            <input type="tel" placeholder="+1 555 555 5555" />
          </div>
        </div>

        <div className="form-row">
          <label>Address</label>
          <input type="text" placeholder="Street, City" />
        </div>

        <div className="form-row">
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
        </div>

        <div className="actions">
          <button type="button" className="btn btn-primary">Create partner</button>
          <button type="button" className="btn btn-ghost">Cancel</button>
        </div>

        <p className="muted" style={{marginTop:8}}>
          Already have an account? <Link to="/partner/login">Login</Link>
        </p>
      </form>
    </section>
  )
}

export default FoodPartnerRegister
