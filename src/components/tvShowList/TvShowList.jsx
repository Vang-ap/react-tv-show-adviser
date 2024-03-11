import { TvShowListItem } from "../tvShowListItem/TvShowListItem";
import styleTvShowList from "./style.module.css";

export function TvShowList({ tvShowList }) {
  return (
    <>
      <div className={styleTvShowList.title}> You may also like:</div>

      <div className={styleTvShowList.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span key={tvShow.id} className={styleTvShowList.tv_show_list_item}>
              <TvShowListItem tvShow={tvShow} onClick={() => ""} />
            </span>
          );
        })}
      </div>
    </>
  );
}
