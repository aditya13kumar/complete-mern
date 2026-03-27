import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';



const UserLogin = () => {

  const navigate = useNavigate();
  

  const submithandler = async (e)=>{
    e.preventDefault();
    
  

    const email = e.target.email.value;
    const password = e.target.password.value;

    axios.post("http://localhost:4000/api/auth/user/login",{
      email,
      password
    },{
      withCredentials:true
    })
    navigate("/");

    e.target.reset();


  }

  return (
    <section className="auth-card" aria-labelledby="user-login">
      <header className="auth-header">
        <h1 id="user-login" className="auth-title">Welcome back</h1>
        <p className="auth-sub">Sign in to your user account.</p>
      </header>

      <form className="auth-form" onSubmit={submithandler}>
        <div className="form-row">
          <label>Email</label>
          <input name='email' type="email" placeholder="you@email.com" />
        </div>

        <div className="form-row">
          <label>Password</label>
          <input name='password' type="password" placeholder="••••••••" />
        </div>

        <div className="actions">
          <button type="submit" className="btn btn-primary">Sign in</button>
          <button type="button" className="btn btn-ghost">Forgot?</button>
        </div>
        <p className="muted" style={{marginTop:8}}>
          Don't have an account? <Link to="/user/register">Register</Link>
        </p>
      </form>
    </section>
  )
}

export default UserLogin
