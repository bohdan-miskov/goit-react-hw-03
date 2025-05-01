import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ searchValue, updateSearch }) {
  const id = useId();

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={`${id}-searchName`}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        onChange={(event) => updateSearch(event.target.value)}
        name="searchName"
        id={`${id}-searchName`}
        value={searchValue}
      />
    </div>
  );
}
