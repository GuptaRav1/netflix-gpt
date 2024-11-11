import React from "react";

const VideoTitle = ({ title, overview }) => {
	return (
		<div className="md:pt-[15%] pt-[30%] px-6 md:px-14 absolute aspect-video bg-gradient-to-r from-black text-white">
			<h1 className="text-xl font-bold md:text-4xl">{title}</h1>
			<p className="mt-2 mb-6 text-sm md:mt-4 md:w-1/3">{overview}</p>
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
