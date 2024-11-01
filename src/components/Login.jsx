import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
    const dispatch = useDispatch()
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(true)
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message) // If validation fails, display the error message
        if (message) return // Stop execution if validation fails
        if (isSignInForm) {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    // Handle sign-in errors and set the error message to display
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '-' + errorMessage)
                });
        }
        // Handle the sign-up case
        else {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                    }).then(() => {
                        const { uid, email, displayName } = auth.currentUser
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                    }).catch((error) => {
                        setErrorMessage(error.message)
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '-' + errorMessage)
                });
        }

    }

    // Toggle between sign-in and sign-up forms
    const toggleForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div>
            <Header /> {/* Render the header component */}

            {/* Background image */}
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg" alt="" />
            </div>

            {/* Login/Sign-up form */}
            <form
                onSubmit={(e) => e.preventDefault()} // Prevent default form submission behavior
                className='absolute left-0 right-0 w-3/12 p-12 mx-auto text-white bg-black bg-opacity-85 my-36' action="">

                {/* Form title - changes based on sign-in or sign-up mode */}
                <h1
                    className='mb-4 text-2xl font-bold text-white'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>

                {/* Full name input - only visible in sign-up mode */}
                {!isSignInForm && <input
                    ref={name}
                    className='w-full p-2 mb-4 bg-gray-700'
                    type="text"
                    placeholder='full name' />}

                {/* Email input */}
                <input
                    ref={email}
                    className='w-full p-2 mb-4 bg-gray-700'
                    type="text"
                    placeholder='email address' />

                {/* Password input */}
                <input
                    ref={password}
                    className='w-full p-2 mb-4 bg-gray-700'
                    type="password"
                    placeholder='password' />

                {/* Error message display */}
                <p className='mb-4 text-red-500'>{errorMessage}</p>

                {/* Sign-in/Sign-up button */}
                <button
                    className='w-full py-2 mb-4 bg-red-700 '
                    onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                {/* Toggle link to switch between sign-in and sign-up */}
                <p
                    className='cursor-pointer'
                    onClick={toggleForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now." : "Already a User? Sign In Now."}
                </p>
            </form>
        </div>
    )
}

export default Login
