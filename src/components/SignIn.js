import React, {useState} from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const SignIn = () =>{
  const[password, setPassword] = useState('')
  const[email, setEmail] = useState('')


  function submitHandler(event) {
    event.preventDefault()
    if (password.length<3 || password.length>20)
      document.getElementById('passerror').style.display = 'block';
    else 
      document.getElementById('passerror').style.display = 'none';
  }

  const handleChangeEm = (e) => {
    setEmail(e.target.value)
  }
  const handleChangePass = (e) => {
    setPassword(e.target.value)
  }

    return(
      <>
      <Header nav={false}/>
        <main className="sign-in-page">
        <h1 className="visually-hidden">Travel App</h1>
        <form className="sign-in-form" autocomplete="off" onSubmit={submitHandler}>
          <h2 className="sign-in-form__title">Sign In</h2>
          <label className="trip-popup__input input">
            <span className="input__heading">Email</span>
            <input name="email" type="email" required 
            value={email}
            onChange={handleChangeEm}
            />
          </label>
          <label className="trip-popup__input input">
            <span className="input__heading">Password</span>
            <input name="password" type="password" autocomplete="new-password" required 
            value = {password}
            onChange={handleChangePass}
            />
            <span id="passerror" style={{display:'none',color:'red'}}>Password must be between 3 and 20 characters</span>
          </label>
          <button className="button" type="submit">Sign In</button>
        </form>
        <span>
          Already have an account?
          <Link to="/sign-up" className="sign-in-form__link">Sign Up</Link>
        </span>
      </main>
      </>
    )
}

export default SignIn;