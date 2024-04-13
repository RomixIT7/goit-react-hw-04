import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  return (
    <header className={css.searchHeader}>
      <form className={css.searchForm} onSubmit={onSubmit}>
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
