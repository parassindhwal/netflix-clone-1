import React, { useRef } from 'react';
import { auth } from '../firebase';
import './SignUpScreen.css';

function SignUpScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch(err => {
            alert(err.message)
        })
    }

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch(err => {
            alert(err.message)
        })
    }

    return (
        <div className="signUpScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button type="submit" onClick={signIn}>Sign In</button>

                <div>
                    <h4 className="signUpScreen__gray">New to Netflix? </h4>
                    <button className="signUpScreen__link" onClick={register}>Sign Up now.</button> 
                </div>
            </form>
        </div>
    )
}

export default SignUpScreen;
