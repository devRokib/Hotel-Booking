import './signup.css'
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import axios from 'axios';



function SignUp() {
const {register,
  handleSubmit,
  formState: { errors },
  getValues,
  reset,
  setError,
  }=useForm()

const onSubmit =async (data)=>{
   const findUserByEmail =  await axios.get(`http://localhost:8800/api/users?email=${data.email}`)
   console.log(findUserByEmail)
   console.log(data)
   if(findUserByEmail.data.length > 0){
    setError("email",{message:"Email is already exists"}) 
   }else {
    try{
      const reg = await axios.post('http://localhost:8800/api/auth/register', data);
    }catch(error){
      setError('something went wrong')
    }
    reset()
   }
}
//  console.log(errors)
  return (
    <div className='signupSection'>
      <div className="fromContainer">
        <h1>Registered Now</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Your Name</label>
            <br />
            <input
             type="text"
             {...register("username", { required: 'Name is required',pattern:{value:/^[A-Za-z]+$/i,message:'You must be write letter'}})}
             id="name" 
             placeholder='name'
             />
            <p>{errors.name && errors.name.message}</p>
            <br/>

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

            <label htmlFor="phone">Phone</label>
            <input
             type="number"
             {...register("phone",
             {required:"phone is required",
             pattern:{value:/(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/,
             message:'number is not valdid'}})} 
             id="phone"
             />
             <p>{errors.phone && errors.phone.message}</p>

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

            <label htmlFor="confirmPassword">Password</label>
            <br />
            <input
             type="password"
             {...register("confirmPassword",
             {required:'Password must be match',
             validate: (value) => value === getValues('password') || "Password doesn't match",
            })}
             id="confirmPassword" 
             placeholder='Confirm Password'
            />
            <p>{errors.confirmPassword && errors.confirmPassword.message}</p>
            <br />
            
            <label htmlFor="country">Country</label>
            <input
             type="text"
             {...register("country", { required: 'country is required' ,pattern:{value:/^[A-Za-z]+$/i,message:'You must be write letter'}})}
             id="country" 
             placeholder='Country'
             />
            <p>{errors.country && errors.country.message}</p>
            <br/>

            <label htmlFor="city">City</label>
            <input
             type="text"
             {...register("city", { required: 'city is required' ,pattern:{value:/^[A-Za-z]+$/i,message:'You must be write letter'}})}
             id="city" 
             placeholder='city'
             />
            <p>{errors.city && errors.city.message}</p>
            <br/>


            <input type="submit" value='Submit Now' />

        </form>

        <NavLink className='containueWithEmail'>
          Continue With Email
        </NavLink>

        <span>or use one if these options</span>

        <ul>

            <NavLink className='signWithfb signup'>
              <BiLogoFacebookSquare />
            </NavLink>

            <NavLink  className='signWithGoogle signup'>
              <FcGoogle />
            </NavLink>

            <NavLink  className='signWithApple signup'>
              <FaApple />
            </NavLink>

        </ul>
      </div>
    </div>
  )
}

export default SignUp
