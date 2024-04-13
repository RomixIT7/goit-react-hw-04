import toast, { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { searchImages } from "./services/api";
import ImageModal from "./components/ImageModal/ImageModal";
import ReactModal from "react-modal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import NothingFound from "./components/NothingFound/NothingFound";

ReactModal.setAppElement("#root");

const notify = () => {
  toast("You must enter text, if you want to search images");
};

function App() {
  const [searchData, setSearchData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);

  const per_page = 12;

  useEffect(() => {
    async function getInfo() {
      if (query.length === 0) return;
      try {
        setLoading(true);
        const { results, total } = await searchImages(query, page, per_page);
        setTotal(total);
        if (page === 1) {
          setSearchData(results);
        } else {
          setSearchData((prevData) => [...prevData, ...results]);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getInfo();
  }, [query, page]);

  const onSetSearchQuery = (searchInfo) => {
    setQuery(searchInfo);
    setPage(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.currentTarget.search.value.trim();
    if (query === "") {
      notify();
      return;
    }
    onSetSearchQuery(query);
  };

  const onClickLoadMoreBtn = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (searchDataItem) => {
    setModalItem(searchDataItem);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            backgroundImage: "linear-gradient(darkblue, blue)",
            color: "white",
            fontSize: "24px",
            textAlign: "center",
          },
        }}
        containerStyle={{
          position: "relative",
          top: 80,
        }}
      />
      <SearchBar onSubmit={handleSubmit} />
      {searchData && (
        <ImageGallery searchData={searchData} openModal={openModal} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {modalItem && (
        <ImageModal
          isModalOpen={isModalOpen}
          modalItem={modalItem}
          closeModal={closeModal}
        />
      )}
      {searchData && total > page * per_page && (
        <LoadMoreBtn onClickLoadMoreBtn={onClickLoadMoreBtn} />
      )}
      {searchData && searchData.length === 0 && <NothingFound />}
    </>
  );
}

export default App;
