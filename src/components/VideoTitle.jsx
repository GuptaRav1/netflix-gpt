import React from "react";

const VideoTitle = ({ title, overview }) => {
	return (
		<div className="md:pt-[15%] pt-[90%] px-6 md:px-14 absolute aspect-video bg-gradient-to-r from-black text-white">
			<h1 className="text-xl font-bold md:text-4xl">{title}</h1>
			<p className="mt-2 mb-2 text-sm md:mb-6 md:mt-4 md:w-1/3">
				{overview}
			</p>
			<div>
				<button className="px-4 py-0 text-lg text-black bg-white rounded-sm md:py-1 md:px-10 hover:bg-opacity-85">
					Play
				</button>
				<button className="px-4 py-0 m-2 text-lg text-white bg-gray-700 rounded-sm md:px-8 md:py-1 bg-opacity-85">
					More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
