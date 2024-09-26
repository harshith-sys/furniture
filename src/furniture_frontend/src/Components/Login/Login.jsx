import './Login.css'
import React, { useEffect, useState } from 'react';

function App() {
  const initialValues = {username: "", email: "", password: ""};
  const [formValues, setFormValues] = useState(initialValues); 
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit,  setIsSubmit] = useState(false);

  const handleChange =  (e) => {
    const {name, value} =  e.target;
    setFormValues({...formValues, [name] : value });
    setIsSubmit(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues))
  }

  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues)
    }
  }, [formErrors])

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)){
      errors.email = "This is not a valid email format!"
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors
  };

  return (
    <div className='container'>
      {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="ui message success">Signed in Successfully</div>): <pre>{JSON.stringify(formValues, undefined, 2)}</pre>}
      <form action="" onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui form">
            <div className="field">
              <label>Username</label>
              <input type="text" name='username' placeholder='Username' value={formValues.username} onChange={handleChange}/>
            </div>
            <p>{formErrors.username}</p>
            <div className="field">
              <label>Email {" "} {" "} &nbsp; &nbsp; &nbsp;</label>
              <input type="email" name='email' placeholder='Email' value={formValues.email} onChange={handleChange}/>
            </div>
            <p>{formErrors.email}</p>
            <div className="field">
              <label>Password</label>
              <input type="text" name='password' placeholder='Password' value={formValues.password} onChange={handleChange}/>
            </div>
            <p>{formErrors.password}</p>
            <div className='gender'>
              <input type="radio" name='gender'/>Male 
              <input type="radio" name='gender'/>Female
            </div>
            <button className='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default App
