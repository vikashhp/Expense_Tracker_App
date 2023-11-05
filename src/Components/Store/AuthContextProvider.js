import AuthContext from "./AuthContext";
import { useState } from "react";

const AuthContextProvider=(props)=>{

    const [token,setToken]=useState(null);

    const userIsSignUp=!!token

    const signUpHandler=(token)=>{
      setToken(token)
    }


    const auth={
     isSignUp:userIsSignUp,  
     signUp:signUpHandler
    }


    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export default AuthContextProvider;