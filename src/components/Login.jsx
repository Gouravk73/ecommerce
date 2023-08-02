import React, { useState,useRef, useContext } from 'react'
import { Button } from 'react-bootstrap';
import{useNavigate } from 'react-router-dom'
import LoginContext from'../components/store/LoginContext'
const Login = () => {
    const history = useNavigate ();
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const emailInputRef =useRef();
    const passwordInputRef =useRef();
    const authCtx = useContext(LoginContext);


const submitHandler=(e)=>{
    e.preventDefault();
    const enteredEmail=emailInputRef.current.value;
    const enteredPassword=passwordInputRef.current.value;
 
    setIsLoading(true);

    let URL
    if(isLogin){
        URL='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZ02Lg8ai7KadcX0d0dwfR8J2RaxbpTkw'
    }
    else{
        URL='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZ02Lg8ai7KadcX0d0dwfR8J2RaxbpTkw'
    }
    fetch(URL,{
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
        if(res.ok) return res.json();
        else return res.json().then((data)=>{
            console.log(data.error.message);
            throw new Error(data.error.message);
        })
    }).then((data)=>{
         authCtx.login(data.idToken);
         //console.log(data);
        history('/store')

    }).catch((err)=>{
         alert(err.message);
    })

}
const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };


  return (
    <div>
        <div className='container text-center'><h1>{isLogin ? 'Login' : 'Sign Up'}</h1></div>
        <form action="" onSubmit={submitHandler} >
            <div className="form-group px-5 m-2">
                <label htmlFor="">Email</label>
                <input className="form-control" type="email" ref={emailInputRef} />
            </div>
            <div className="px-5 form-group m-2">
                <label htmlFor="">Password</label>
                <input className="form-control" type="password" ref={passwordInputRef}/>
            </div>
            <div className="col px-5 m-2">
            {!isLoading && (<button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Create Account'}</button>)}
            {isLoading && <p>Sending request...</p>}
            </div >
            <div className="col px-5 m-2">
            <Button onClick={switchAuthModeHandler}>
                {isLogin ? 'Create new account' : 'Login with existing account'}
            </Button>S
            </div>
            <div className='text-center'>
 
            </div>
        </form>
    </div>
  )
}

export default Login