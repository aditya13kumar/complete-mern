// import { Link } from 'react-router-dom'
// import '../styles/auth.css'
// import axios  from 'axios'
// import { useNavigate } from 'react-router-dom'

// const FoodPartnerRegister = () => {
//   const navigate = useNavigate();

//   const handlesubmit = async(e)=>{
//     e.preventDefault();

//     const bussinessname = e.target.bussinessname.value;
//     const contactName = e.target.contactName.value;
//     const email = e.target.email.value;
//     const PhoneNumber = e.target.PhoneNumber.value;
//     const Address = e.target.Address.value;
//     const password = e.target.password.value;

//     await axios.post("http://localhost:4000/api/food/partner/register",{
//       bussinessname,
//       contactName,
//       email,
//       PhoneNumber,
//       Address,
//       password
//     },{withCredentials:true})

//     navigate("/createfood");

//     e.target.reset(); 

//   }
//   return (
//     <section className="auth-card" aria-labelledby="partner-register">
//       <header className="auth-header">
//         <h1 id="partner-register" className="auth-title">Partner signup</h1>
//         <p className="auth-sub">Register your food partner account.</p>
//       </header>

//       <form className="auth-form" onSubmit={handlesubmit}>
//         <div className="form-row">
//           <label>Business name</label>
//           <input name='bussinessname' type="text" placeholder="Joe's Deli" />
//         </div>

//         <div className="form-row">
//           <label>Contact name</label>
//           <input name='contactName' type="text" placeholder="Contact person" />
//         </div>

//         <div className="form-row two-cols">
//           <div className="form-col">
//             <label>Contact email</label>
//             <input name='email' type="email" placeholder="contact@business.com" />
//           </div>
//           <div className="form-col">
//             <label>Phone number</label>
//             <input name='PhoneNumber' type="tel" placeholder="+1 555 555 5555" />
//           </div>
//         </div>

//         <div className="form-row">
//           <label>Address</label>
//           <input name='Address' type="text" placeholder="Street, City" />
//         </div>

//         <div className="form-row">
//           <label>Password</label>
//           <input name='password' type="password" placeholder="••••••••" />
//         </div>

//         <div className="actions">
//           <button type='submit' className="btn btn-primary">Create partner</button>
//           <button type="button" className="btn btn-ghost">Cancel</button>
//         </div>

//         <p className="muted" style={{marginTop:8}}>
//           Already have an account? <Link to="/partner/login">Login</Link>
//         </p>
//       </form>
//     </section>
//   )
// }
// export default FoodPartnerRegister

import { Link, useNavigate } from 'react-router-dom'
import '../styles/auth.css'
import axios from 'axios'

const FoodPartnerRegister = () => {
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    const businessname = e.target.businessname.value;
    const contactName = e.target.contactName.value;
    const contactemail = e.target.contactemail.value;
    const PhoneNumber = e.target.PhoneNumber.value;
    const Address = e.target.Address.value;
    const password = e.target.password.value;

    try {
      const res = await axios.post(
        "http://localhost:4000/api/auth/foodpartner/register",
        {
          businessname,
          contactName,
          contactemail,
          PhoneNumber,
          Address,
          password
        },
        { withCredentials: true }
      );

      console.log("Success:", res.data);
      e.target.reset();
      navigate("/createfood");
    } catch (error) {
      console.log("FULL ERROR:", error);
      console.log("STATUS:", error.response?.status);
      console.log("DATA:", error.response?.data);
      alert("Partner registration failed");
    }
  };

  return (
    <section className="auth-card" aria-labelledby="partner-register">
      <header className="auth-header">
        <h1 id="partner-register" className="auth-title">Partner signup</h1>
        <p className="auth-sub">Register your food partner account.</p>
      </header>

      <form className="auth-form" onSubmit={handlesubmit}>
        <div className="form-row">
          <label>Business name</label>
          <input name="businessname" type="text" placeholder="Joe's Deli" />
        </div>

        <div className="form-row">
          <label>Contact name</label>
          <input name="contactName" type="text" placeholder="Contact person" />
        </div>

        <div className="form-row two-cols">
          <div className="form-col">
            <label>Contact email</label>
            <input name="contactemail" type="email" placeholder="contact@business.com" />
          </div>
          <div className="form-col">
            <label>Phone number</label>
            <input name="PhoneNumber" type="tel" placeholder="+1 555 555 5555" />
          </div>
        </div>

        <div className="form-row">
          <label>Address</label>
          <input name="Address" type="text" placeholder="Street, City" />
        </div>

        <div className="form-row">
          <label>Password</label>
          <input name="password" type="password" placeholder="••••••••" />
        </div>

        <div className="actions">
          <button type="submit" className="btn btn-primary">Create partner</button>
          <button type="button" className="btn btn-ghost">Cancel</button>
        </div>

        <p className="muted" style={{ marginTop: 8 }}>
          Already have an account? <Link to="/partner/login">Login</Link>
        </p>
      </form>
    </section>
  )
}

export default FoodPartnerRegister
