import styleSearchBar from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar() {
  return (
    <>
      <SearchIcon size={27} className={styleSearchBar.icon} />
      <input
        className={styleSearchBar.input}
        type="text"
        placeholder="Search a tv show you may like"
      />
    </>
  );
}
