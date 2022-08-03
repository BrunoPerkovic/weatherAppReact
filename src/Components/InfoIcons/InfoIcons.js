import "./InfoIcons.scss";

const InfoIcons = ({ humidity, pressure, wind }) => {
  return (
    <div className="infoIcons">
      <p className="infoIcons__item infoIcons__item--blue">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3313/3313888.png"
          alt="rain"
        />{" "}
        {humidity}%
        <br />
      </p>

      <p className="infoIcons__item infoIcons__item--red">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1843/1843544.png"
          alt=""
        />
        {pressure}
        <br />
        hPa
      </p>

      <p className="infoIcons__item infoIcons__item--purple">
        <img
          src="https://cdn-icons-png.flaticon.com/512/959/959711.png"
          alt=""
        />{" "}
        {wind}
        <br />
        kmH
      </p>
    </div>
  );
};

export default InfoIcons;
