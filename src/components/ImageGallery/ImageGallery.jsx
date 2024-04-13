import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ searchData, openModal }) => {
  return (
    <ul className={css.imageList}>
      {Array.isArray(searchData) &&
        searchData.map((searchDataItem) => {
          return (
            <ImageCard
              key={searchDataItem.id}
              searchDataItem={searchDataItem}
              openModal={openModal}
            />
          );
        })}
    </ul>
  );
};

export default ImageGallery;
