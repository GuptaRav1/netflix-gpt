import React from "react";

const VideoTitle = ({ title, overview }) => {
	return (
		<div className="pt-[15%] px-14 absolute aspect-video bg-gradient-to-r from-black text-white">
			<h1 className="text-4xl font-bold">{title}</h1>
			<p className="w-1/3 mt-4 mb-6 text-sm">{overview}</p>
			<div>
				<button className="px-10 py-1 text-lg text-black bg-white rounded-sm hover:bg-opacity-85">
					Play
				</button>
				<button className="px-8 py-1 m-2 text-lg text-white bg-gray-700 rounded-sm bg-opacity-85">
					More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
