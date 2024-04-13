import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClickLoadMoreBtn }) => {
  return (
    <button
      type="button"
      className={css.loadMoreBtn}
      onClick={onClickLoadMoreBtn}
    >
      LoadMoreBtn
    </button>
  );
};

export default LoadMoreBtn;
