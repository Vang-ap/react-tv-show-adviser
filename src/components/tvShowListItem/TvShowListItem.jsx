import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import styleTvShowListItem from "./style.module.css";

export function TvShowListItem({ tvShow, onClick }) {
  return (
    <div
      onClick={() => onClick(tvShow)}
      className={styleTvShowListItem.container}
    >
      <img
        className={styleTvShowListItem.img}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        alt={tvShow.name}
      />
      <div className={styleTvShowListItem.title}>{tvShow.name}</div>
    </div>
  );
}
