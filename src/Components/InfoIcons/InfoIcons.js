import "./InfoIcons.scss";

const InfoIcons = () => {
	return (
		<div className="infoIcons">
			<p className="infoIcons__item infoIcons__item--blue">
				<img
					src="https://cdn-icons-png.flaticon.com/512/3313/3313888.png"
					alt="rain"
				/>{" "}
				10%
			</p>

			<p className="infoIcons__item infoIcons__item--red">
				<img
					src="https://cdn-icons-png.flaticon.com/512/1843/1843544.png"
					alt=""
				/>
				25%
			</p>

			<p className="infoIcons__item infoIcons__item--purple">
				<img
					src="https://cdn-icons-png.flaticon.com/512/959/959711.png"
					alt=""
				/>{" "}
				19km/h
			</p>
		</div>)
}

export default InfoIcons; 