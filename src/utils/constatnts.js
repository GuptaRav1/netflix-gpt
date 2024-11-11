export const LOGO =
	"https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg";

export const MOBILE_LOGO =
	"https://cdn.worldvectorlogo.com/logos/netflix-logo-icon.svg";

export const PROFILE_PIC =
	"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/120px-Netflix-avatar.png?20201013161117";

export const BG_IMG_URL =
	"https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg";

export const API_OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
	},
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w200";

export const SUPPORTED_LANGUAGES = [
	{ value: "en", name: "English" },
	{ value: "hi", name: "Hindi" },
	{ value: "es", name: "Spanish" },
	{ value: "fr", name: "French" },
];
