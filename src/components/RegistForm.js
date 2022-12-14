import React, { useState } from 'react'

export default function RegistForm({ Registration, error }) {

  const [details, setDetails] = useState({name: "", email:"", password:"", confirmPassword:""});

  const submitHandler = e =>{
    e.preventDefault();

    Registration(details);
  }
  
  return ( 
    <form onSubmit={submitHandler}>
        <div className="form-inner">
            <h2>Login</h2>
            {(error !== "") ? (<div className="error">{error}</div>): ""}
            <div className="form-group">
                <label htmlFor="name">Names:</label>
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" name="password" id="confirmPassword" onChange={e => setDetails({...details, confirmPassword: e.target.value})} value={details.confirmPassword}/>
            </div>
            <input type="submit" value="Create" />
        </div>
    </form>
  )
}
