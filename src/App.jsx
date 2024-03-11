import { useEffect, useState } from "react";
import { TvShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./api/config.js";
import "./global.css";

import styleApp from "./style.module.css";
import { TvShowDetail } from "./components/tvShowDetail/TvShowDetail.jsx";
import { Logo } from "./components/logo/logo.jsx";
import logoImage from "./assets/images/logo.png";

export function App() {
  const [currentTvShow, setCurrentTvShow] = useState();

  async function fetchPopulars() {
    const populars = await TvShowAPI.fetchPopulars();

    if (populars.length > 0) {
      setCurrentTvShow(populars[0]);
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  console.log("** currentTvShow: ", currentTvShow);

  return (
    <div
      className={styleApp.main_container}
      style={{
        background: currentTvShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTvShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={styleApp.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              image={logoImage}
              title="Watowatch"
              subtitle="Find a show you may like"
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={styleApp.tv_show_detail}>
        {currentTvShow && <TvShowDetail tvShow={currentTvShow} />}
      </div>
      <div className={styleApp.recommendations}>recommendations</div>
    </div>
  );
}
