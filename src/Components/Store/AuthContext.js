import React from 'react'

const AuthContext=React.createContext({
  isSignUp:false,
  signUp:(token)=>{},
  isLogin:false,
  login:()=>{},
  logout:()=>{}
})

export default AuthContext