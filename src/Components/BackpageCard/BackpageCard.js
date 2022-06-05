import React from "react";
import "./BackpageCard.scss";

export const BackpageCard = ({ icon, temperature, time }) => {
	return (
		<div className="backpageCards">
			<div className="backpageCards__info">
				<div className="backpageCards__icons">
					{" "}
					<img
						src="https://cdn-icons-png.flaticon.com/512/606/606795.png"
						alt=""
					/>{" "}
					{icon}{" "}
				</div>
				<div className="backpageCards__temp">15<span>°C</span> {temperature} </div>
				<div className="backpageCards__time">10 am {time} </div>
			</div>

			<div className="backpageCards__info">
				<div className="backpageCards__icons">
					{" "}
					<img
						src="https://cdn-icons-png.flaticon.com/512/606/606795.png"
						alt=""
					/>{" "}
					{icon}{" "}
				</div>
				<div className="backpageCards__temp">15<span>°C</span> {temperature} </div>
				<div className="backpageCards__time">11 am {time} </div>
			</div>

			<div className="backpageCards__info">
				<div className="backpageCards__icons">
					{" "}
					<img
						src="https://cdn-icons-png.flaticon.com/512/606/606795.png"
						alt=""
					/>{" "}
					{icon}{" "}
				</div>
				<div className="backpageCards__temp">15<span>°C</span>  {temperature} </div>
				<div className="backpageCards__time">12 am {time} </div>
			</div>
		</div>
	);
};
