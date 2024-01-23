import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
// import AuthProvider from './AuthProvider';
export const AuthProvider = createContext()
export function useAuth(){
  return useContext(AuthProvider)
}

const initialState = {
  user:JSON.parse(localStorage.getItem('user')) || null,
  loading:false,
  error:'',
}
function AuthContext({ children }) {
  const [state, setState] = useState(initialState);

// function AuthProvider({children}) {
//  const [state ,setState] =useState(initialState)

useEffect(() => {
  localStorage.setItem('user', JSON.stringify(state.user));
}, [state.user]);

 const login = async (email,password)=>{
  setState({...state,loading:true});
  try{
    const response =await axios.post(
      "http://localhost:8800/api/auth/login",
      {email,password}
    )
    setState({loading:false,user:response.data.details});
    return {
      success: true
    }
  }catch(error){
    console.log(error.response.data.message)
  }
 }

 const value = {login,  state}
  return (
    <>
        <AuthProvider.Provider value={value}>
            {children}
        </AuthProvider.Provider>
    </>
  )
}

export default AuthContext;
