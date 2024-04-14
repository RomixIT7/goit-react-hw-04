import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

const notify = () => {
  toast("You must enter text, if you want to search images");
};

const SearchBar = ({ onSetSearchQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.currentTarget.search.value.trim();
    if (query === "") {
      notify();
      return;
    }
    onSetSearchQuery(query);
  };

  return (
    <header className={css.searchHeader}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
