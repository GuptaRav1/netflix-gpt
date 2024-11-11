import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG_URL } from "../utils/constatnts";
import Footer from "./Footer";

const Login = () => {
	const dispatch = useDispatch();
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errorMessage, setErrorMessage] = useState(true);
	const email = useRef(null);
	const password = useRef(null);
	const name = useRef(null);

	const handleButtonClick = () => {
		const message = checkValidData(
			email.current.value,
			password.current.value
		);
		setErrorMessage(message); // If validation fails, display the error message
		if (message) return; // Stop execution if validation fails
		if (isSignInForm) {
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					const user = userCredential.user;
				})
				.catch((error) => {
					// Handle sign-in errors and set the error message to display
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + "-" + errorMessage);
				});
		}
		// Handle the sign-up case
		else {
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					const user = userCredential.user;
					updateProfile(user, {
						displayName: name.current.value,
					})
						.then(() => {
							const { uid, email, displayName } = auth.currentUser;
							dispatch(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
								})
							);
						})
						.catch((error) => {
							setErrorMessage(error.message);
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + "-" + errorMessage);
				});
		}
	};

	// Toggle between sign-in and sign-up forms
	const toggleForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	return (
		<div>
			<Header />

			<div className="absolute">
				<img src={BG_IMG_URL} alt="" />
			</div>

			<form
				onSubmit={(e) => e.preventDefault()}
				className="absolute left-0 right-0 w-3/12 p-12 mx-auto text-white bg-black bg-opacity-85 my-36"
				action="">
				<h1 className="mb-4 text-2xl font-bold text-white">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>

				{!isSignInForm && (
					<input
						ref={name}
						className="w-full p-2 mb-4 bg-gray-700"
						type="text"
						placeholder="full name"
					/>
				)}

				<input
					ref={email}
					className="w-full p-2 mb-4 bg-gray-700"
					type="text"
					placeholder="email address"
				/>

				<input
					ref={password}
					className="w-full p-2 mb-4 bg-gray-700"
					type="password"
					placeholder="password"
				/>

				<p className="mb-4 text-red-500">{errorMessage}</p>

				<button
					className="w-full py-2 mb-4 bg-red-700 "
					onClick={handleButtonClick}>
					{isSignInForm ? "Sign In" : "Sign Up"}
				</button>

				<p className="cursor-pointer" onClick={toggleForm}>
					{isSignInForm
						? "New to Netflix? Sign Up Now."
						: "Already a User? Sign In Now."}
				</p>
			</form>

			<Footer />
		</div>
	);
};

export default Login;
