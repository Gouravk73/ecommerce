import React, { useState,useRef, useContext } from 'react'
import { Button } from 'react-bootstrap';
  import LoginContext from './store/LoginContext.jsx';
import {  useNavigate } from 'react-router-dom';
const Login = () => {
    
    const emailInputRef =useRef();
    const passwordInputRef =useRef();

    const authCtx =useContext(LoginContext);
    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
      };


const submitHandler=(e)=>{
    e.preventDefault();
    const enteredEmail=emailInputRef.current.value;
    const enteredPassword=passwordInputRef.current.value;
 
    setIsLoading(true);

    let url;
    if(isLogin){
        url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZ02Lg8ai7KadcX0d0dwfR8J2RaxbpTkw'
    }
    else{
        url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZ02Lg8ai7KadcX0d0dwfR8J2RaxbpTkw'
    }
    fetch(url,{
        method: 'POST',
        body:JSON.stringify({email:enteredEmail,
        password:enteredPassword,
        returnSecureToken:true,
        }),
        headers: {
        'Content-Type': 'application/json',

        },
    }).then((res)=>{
        setIsLoading(false);
        if(res.ok) {
            return res.json();
        }else {
            return res.json().then((data)=>{
            //let errorMessage = 'Authentication failed!';

            //console.log(data.error.message);
            throw new Error(data.error.message);
           // throw new Error(errorMessage);

        })
    }
    }).then((data)=>{
         authCtx.login(data.idToken)
         console.log(data,'data',data.idToken);
         navigate('/store');
 
    }).catch((err)=>{
         alert(err.message);
    })

}



  return (
    <div>
        <div className='container text-center'><h1>{isLogin ? 'Login' : 'Sign Up'}</h1></div>
        <form action="" onSubmit={submitHandler} >
            <div className="form-group px-5 m-2">
                <label htmlFor="">Email</label>
                <input className="form-control" type="email" ref={emailInputRef} required />
            </div>
            <div className="px-5 form-group m-2">
                <label htmlFor="">Password</label>
                <input className="form-control" type="password" ref={passwordInputRef} required/>
            </div>
            <div className="col px-5 m-2">
            {!isLoading && (<button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Create Account'}</button>)}
            {isLoading && <p>Sending request...</p>}
            </div >
            <div className="col px-5 m-2">
            <Button onClick={switchAuthModeHandler}>
                {isLogin ? 'Create new account' : 'Login with existing account'}
            </Button>
            </div> 
        </form>
    </div>
  )
}

export default Login