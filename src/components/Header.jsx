import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import {
	LOGO,
	PROFILE_PIC,
	SUPPORTED_LANGUAGES,
	MOBILE_LOGO,
} from "../utils/constatnts";
import { toggleSearchGPTView } from "../utils/gptSlice";
import { setLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstatns";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const showSearchGPT = useSelector((store) => store.gpt.showSearchGPT);
	const langKey = useSelector((store) => store.config.language);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName } = user;
				dispatch(
					addUser({ uid: uid, email: email, displayName: displayName })
				);
				navigate("/browse");
			} else {
				dispatch(removeUser());
				navigate("/");
			}
		});

		return () => unsubscribe();
	}, []);

	const user = useSelector((store) => store.user);
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				navigate("/error");
			});
	};

	const handleSearchGPTClick = () => {
		dispatch(toggleSearchGPTView());
	};

	const handleSetLanguage = (e) => {
		dispatch(setLanguage(e.target.value));
	};

	return (
		<div className="absolute z-10 flex items-center justify-between w-full p-6 bg-gradient-to-b from-black">
			<a href="/browse">
				{isMobile ? (
					<img className="-ml-2 w-11" src={MOBILE_LOGO} alt="logo" />
				) : (
					<img className="w-40 h-9" src={LOGO} alt="logo" />
				)}
			</a>

			{user && (
				<div className="flex gap-4">
					<button
						onClick={handleSearchGPTClick}
						className="text-sm font-semibold text-white md:text-base md:bg-purple-700 md:px-4">
						{showSearchGPT ? "Homepage" : "Search GPT"}
					</button>

					<button
						onClick={handleSignOut}
						className="text-sm font-semibold text-white md:text-base md:px-4 md:bg-green-600">
						{lang[langKey].signOut}
					</button>

					<select
						onChange={handleSetLanguage}
						className="px-2 py-1 text-sm font-semibold text-white bg-red-500 md:text-base"
						name="language"
						id="language-selector">
						{SUPPORTED_LANGUAGES.map((lang) => (
							<option key={lang.value} value={lang.value}>
								{lang.name}
							</option>
						))}
					</select>

					{isMobile ? null : (
						<img className="w-9 h-9" src={PROFILE_PIC} alt="user-icon" />
					)}
				</div>
			)}
		</div>
	);
};

export default Header;
