import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(true)
    const email = useRef(null)
    const password = useRef(null)

    const handleButtonClick = () => {

        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message)
        // toggleForm()
    }

    const toggleForm = () => {
        setIsSignInForm(!isSignInForm) // toggle form state
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg" alt="" />
            </div>

            <form
                onSubmit={(e) => e.preventDefault()}
                className='absolute left-0 right-0 w-3/12 p-12 mx-auto text-white bg-black bg-opacity-85 my-36' action="">

                <h1
                    className='mb-4 text-2xl font-bold text-white'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignInForm && <input
                    className='w-full p-2 mb-4 bg-gray-700'
                    type="text"
                    placeholder='full name' />}

                <input
                    ref={email}
                    className='w-full p-2 mb-4 bg-gray-700'
                    type="text"
                    placeholder='email address' />

                <input
                    ref={password}
                    className='w-full p-2 mb-4 bg-gray-700'
                    type="password"
                    placeholder='password' />

                <p className='mb-4 text-red-500'>{errorMessage}</p>

                <button
                    className='w-full py-2 mb-4 bg-red-700 '
                    onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

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
