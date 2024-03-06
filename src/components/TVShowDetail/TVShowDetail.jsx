import styleTvShowDetail from "./style.module.css";

export function TvShowDetail({ tvShow }) {
  return (
    <div>
      <div className={styleTvShowDetail.title}>{tvShow.name}</div>
      <div className={styleTvShowDetail.rating}>{tvShow.vote_average}</div>
      <div className={styleTvShowDetail.overview}>{tvShow.overview}</div>
    </div>
  );
}
