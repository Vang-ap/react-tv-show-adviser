import styleSearchBar from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      console.log("** e.target.value: ", e.target.value);
      onSubmit(e.target.value);
    }
  }
  return (
    <>
      <SearchIcon size={27} className={styleSearchBar.icon} />
      <input
        onKeyUp={submit}
        className={styleSearchBar.input}
        type="text"
        placeholder="Search a tv show you may like"
      />
    </>
  );
}
