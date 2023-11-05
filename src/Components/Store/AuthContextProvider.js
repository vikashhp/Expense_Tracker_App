import AuthContext from "./AuthContext";
import { useState } from "react";

const AuthContextProvider=(props)=>{

    const [token,setToken]=useState(null);
    const [token1,setToken1]=useState(null);

    const userIsSignUp=!!token;
    const userIsLogin=!!token1;

    const signUpHandler=(token)=>{
      setToken(token)
    }

    const loginInHandler=(token1)=>{
      setToken1(token1)
      localStorage.setItem('token',token1)
    }


    const auth={
     isSignUp:userIsSignUp,  
     signUp:signUpHandler,
     isLogin:userIsLogin,
     login:loginInHandler

    }


    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export default AuthContextProvider;