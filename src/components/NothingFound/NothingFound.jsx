import css from "./NothingFound.module.css";

const NothingFound = () => {
  return (
    <p className={css.nothingFound}>
      Sorry, we couldn&apos;t find anything for this query
    </p>
  );
};

export default NothingFound;
