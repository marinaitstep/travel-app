import React, {useState} from "react";
import { Link } from "react-router-dom";

const SignUp = () =>{
  const[fullname, setFullname] = useState('')
  const[password, setPassword] = useState('')
  const[email, setEmail] = useState('')

  function submitHandler(event) {
    event.preventDefault()
    if (password.length<3 || password.length>20)
      document.getElementById('passerror').style.display = 'block';
    else 
      document.getElementById('passerror').style.display = 'none';
  }

  const handleChangeName = (e) => {
    setFullname(e.target.value)
  }
  const handleChangeEm = (e) => {
    setEmail(e.target.value)
  }
  const handleChangePass = (e) => {
    setPassword(e.target.value)
  }

    return(
        <main className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-up-form" autocomplete="off" onSubmit={submitHandler}>
        <h2 className="sign-up-form__title">Sign Up</h2>
        <label className="trip-popup__input input">
          <span className="input__heading">Full name</span>
          <input name="full-name" type="text" required 
          value={fullname}
          onChange={handleChangeName}/>
        </label>
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
        <button className="button" type="submit">Sign Up</button>
      </form>
      <span>
        Already have an account?
        <Link to="/sign-in" className="sign-up-form__link">Sign In</Link>
      </span>
    </main>
    )
}

export default SignUp;