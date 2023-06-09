import "./App.css";
import Weather from "./Weather";
import Temperature from "./Temperature";

export default function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="early-pick">Dnipro Toronto Lviv Prague</div>
        <h3 className="current-time">09:00</h3>
        <form id="search-form">
          <div className="row">
            <div className="col city-selection">
              <input
                type="text"
                className="form-control city"
                placeholder="City"
                id="search-text-input"
              />
            </div>
            <div className="col search">
              <button id="buttonSearch">Search</button>
            </div>
            <div className="col current">
              <button id="buttonCurrent">Current</button>
            </div>
          </div>
        </form>
        <div></div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-2 period">
              <span className="choice" id="main-city">
                DNIPRO
              </span>
              <Weather />
              <div className="row">
                <div className="col">
                  <img
                    src="data:image/jpeg;base64,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"
                    id="icon"
                    alt="Clouds"
                    width="80px"
                  />
                </div>
                <div className="col">
                  <Temperature />
                </div>
              </div>
              <div className="temperature-unit">
                °C|°F
                {/* <a href="#" id="celsius-link">
                  °C/
                </a>
                <a href="#" id="fahrenheit-link">
                  °F
                </a> */}
              </div>
            </div>
            <div className="col period" id="forecast"></div>
          </div>
        </div>
      </div>
      <div className="source-on-github">
        <small>
          <a href="https://github.com/NataSpace/cs-forecast-react.git">
            Open source on GitHub
          </a>
          , by Nataliia Piddubna
        </small>
      </div>
    </div>
  );
}
