import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'
import axios from 'axios';
import { useNavigate }from 'react-router-dom';

const UserRegister = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e)=>{
    e.preventDefault();

    const fullname = e.target.fullname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    await axios.post("http://localhost:4000/api/auth/user/register",{
      fullname,
      email,
      password
    },{ withCredentials: true })

    navigate("/");
    
    e.target.reset();
  }
  return (
    <section className="auth-card" aria-labelledby="user-register">
      <header className="auth-header">
        <h1 id="user-register" className="auth-title">Create your account</h1>
        <p className="auth-sub">just join and enjoy delicious food!</p>
      </header>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Full name</label>
          <input name='fullname' type="text" placeholder="name......" />
        </div>

        <div className="form-row">
          <label>Email</label>
          <input name="email" type="email" placeholder="email.com" />
        </div>

        <div className="form-row">
          <label>Password</label>
          <input name="password" type="password" placeholder="••••••••" />
        </div>

        

        <div className="actions">
          <button type="submit" className="btn btn-primary">Create account</button>
          <button type="button" className="btn btn-ghost">Cancel</button>
        </div>

        <p className="muted" style={{marginTop:8}}>
          Already have an account? <Link to="/user/login">Login</Link>
        </p>
      </form>
    </section>
  )
}

export default UserRegister
