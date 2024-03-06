import { FiveStarRating } from "../fiveStarRating/FiveStarRating";
import styleTvShowDetail from "./style.module.css";

export function TvShowDetail({ tvShow }) {
  // toFixed(1) : afficher un nombre avec 2 chiffre après la virgule
  const rating = tvShow.vote_average.toFixed(1) / 2;
  return (
    <div>
      <div className={styleTvShowDetail.title}>{tvShow.name}</div>
      <div className={styleTvShowDetail.rating_container}>
        <FiveStarRating rating={rating} />
        <div className={styleTvShowDetail.rating}>{rating}/5</div>
      </div>
      <div className={styleTvShowDetail.overview}>{tvShow.overview}</div>
    </div>
  );
}
