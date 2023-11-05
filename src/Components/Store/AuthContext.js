import React from 'react'

const AuthContext=React.createContext({
  isSignUp:false,
  signUp:(token)=>{}
})

export default AuthContext