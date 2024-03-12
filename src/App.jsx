import { useEffect, useState } from "react";
import { TvShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./config.js";
import "./global.css";

import styleApp from "./style.module.css";
import { TvShowDetail } from "./components/tvShowDetail/TvShowDetail.jsx";
import { Logo } from "./components/logo/logo.jsx";
import logoImage from "./assets/images/logo.png";
import { TvShowList } from "./components/tvShowList/TvShowList.jsx";
import { SearchBar } from "./components/searchBar/SearchBar.jsx";

export function App() {
  const [currentTvShow, setCurrentTvShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  // get current tv show populars
  async function fetchPopulars() {
    try {
      const populars = await TvShowAPI.fetchPopulars();

      if (populars.length > 0) {
        setCurrentTvShow(populars[0]);
      }
    } catch (error) {
      alert("Erreur durant la recherche des séries populaires");
      console.error("Message d'erreur : ", error.message);
    }
  }

  // get list tv show recommendations
  async function fetchRecommendations(tvShowId) {
    try {
      const recommendations = await TvShowAPI.fetchRecommendations(tvShowId);

      if (recommendations.length > 0) {
        setRecommendationList(recommendations.slice(0, 10));
      }
    } catch (error) {
      alert("Erreur durant la recherche des séries recommandées");
      console.error("Message d'erreur : ", error.message);
    }
  }

  // get current tv show popular details
  useEffect(() => {
    fetchPopulars();
  }, []);

  // get list tv show recommendations
  useEffect(() => {
    if (currentTvShow) {
      fetchRecommendations(currentTvShow.id);
    }
  }, [currentTvShow]);

  async function searchTvShow(tvShowName) {
    try {
      console.log("** tvShowName: ", tvShowName);
      const searchResponse = await TvShowAPI.fetchByTitle(tvShowName);

      if (searchResponse.length > 0) {
        setCurrentTvShow(searchResponse[0]);
      }
    } catch (error) {
      alert("Erreur durant la recherche de la série");
      console.error("Message d'erreur : ", error.message);
    }
  }

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
            <SearchBar onSubmit={searchTvShow} />
          </div>
        </div>
      </div>
      <div className={styleApp.tv_show_detail}>
        {currentTvShow && <TvShowDetail tvShow={currentTvShow} />}
      </div>
      <div className={styleApp.recommendations}>
        {recommendationList && recommendationList.length > 0 && (
          <TvShowList
            onClickItem={setCurrentTvShow}
            tvShowList={recommendationList}
          />
        )}
      </div>
    </div>
  );
}
