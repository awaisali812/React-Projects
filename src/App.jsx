import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
import { useState } from "react";

function App() {
const [formData, setFormData] = useState({
  username:'',
  email:'',
  password:'',
  confirmPassword:''
});
const [errors,setErrors]=useState({})

const handleChange=(e)=>{
  const {name,value}=e.target
  setFormData({
    ...formData,[name]:value
  })
}

const handleSubmit=(e)=>{
e.preventDefault();
const validationErrors={};
if (!formData.username.trim()) {
  validationErrors.username='username is required'
}

if (!formData.email.trim()) {
  validationErrors.email='email is required'
} else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
  validationErrors.email = 'Email is not valid';
}

if (!formData.password.trim()) {
  validationErrors.password='password is required'
} else if (formData.password.length <8) {
  validationErrors.password='password must be of 8 characters'
}

if (formData.confirmPassword.trim() !==formData.password.trim()) {
  validationErrors.confirmPassword='password does not match'
}

setErrors(validationErrors)
if (Object.keys(validationErrors).length===0) {
  alert('form submitted successfully')
}
}
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 ">
           <h2 className="text-success text-center">Form Validation</h2>
           <form onSubmit={handleSubmit}>
                <div class="form-group my-2">
                  <label for="username" className="">Username</label>
                  <input type="text" name="username" class="form-control" id="username" placeholder="Enter Username" onChange={handleChange}/>
                  {errors.username && <span className="text-danger">{errors.username}</span>}
                </div>
                <div class="form-group my-2">
                  <label for="exampleInputEmail1" className="">Email address</label>
                  <input type="email" name="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" onChange={handleChange}/>
                  {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>
                <div class="form-group my-2">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleChange}/>
                  {errors.password && <span className="text-danger">{errors.password}</span>}
                </div>
                <div class="form-group my-2">
                  <label for="confirmmyPassword">Confirm Password</label>
                  <input type="password" name="confirmPassword" class="form-control" id="confirmmyPassword" placeholder="confirm Password" onChange={handleChange}/>
                  {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword}</span>}
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        <div className="col-3"></div>
      </div>
    
    </div>
     
    </>
  )
}

export default App
