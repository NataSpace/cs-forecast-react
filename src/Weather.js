import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <br />
      <span className="precipitation" id="description">
        Clouds
      </span>
      <ul>
        <li className="more humidity" id="humidity">
          Humidity: 65%
        </li>
        <li className="more wind" id="wind">
          Wind: 2km/h
        </li>
      </ul>
    </div>
  );
}
