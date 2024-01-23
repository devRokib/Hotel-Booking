import { useAuth } from '../authContext/AuthContext';
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import './signin.css'
import { useForm } from 'react-hook-form';
function SignIn() {
  const  {register,
    handleSubmit,
    formState: { errors },
    getValues,
    }=useForm()

   const {login, state }= useAuth();

   const navigate = useNavigate()

    const onSubmit =async () => {
      
      const {email,password} = getValues();
      await login(email, password)
      if(state.user){
        navigate('/')
      }
   }
   return(
    <div>
        <div className="fromContainer">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
              
              <label htmlFor="email">
                Your Email
              </label>

              <br />

              <input
              type="text"
              {...register("email",
              {required:"email is required",
              pattern:{value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message:'email is not valid'}})}
              id="email"
              placeholder='email'
              />
              <p>{errors.email && errors.email.message}</p>
              <br />

              <label htmlFor="password">
                Password
              </label>
              <br />
              <input
              type="password"
              {...register("password",{required:"Password filed is required",pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,message:'Minimum eight characters, at least one uppercase , one lowercase letter and one number'}})}
              id="password"
              placeholder='password'
              />
              <p>{errors.password && errors.password.message}</p>
              <br />

              <input type="submit" value='Submit Now' />

          </form>
          <NavLink className='containueWithEmail'>Continue With Email</NavLink>
          <span>or use one if these options</span>
          <ul>
              <NavLink className='signWithfb signup'><BiLogoFacebookSquare /></NavLink>
              <NavLink  className='signWithGoogle signup'><FcGoogle /></NavLink>
              <NavLink  className='signWithApple signup'><FaApple /></NavLink>
          </ul>
        </div>
      </div>
  )
}

export default SignIn
