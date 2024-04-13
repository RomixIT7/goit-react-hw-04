import Modal from "react-modal";
import closeIcon from "../../assets/close-icon.svg";
import css from "./ImageModal.module.css";

Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.7)";

const ImageModal = ({
  isModalOpen,
  modalItem: {
    alt_description,
    urls: { regular },
    likes,
    user: { name },
  },
  closeModal,
}) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className={css.modal}
    >
      <button type="button" onClick={closeModal} className={css.closeBtn}>
        <img src={closeIcon} width={20} height={20} />
      </button>
      <img src={regular} alt={alt_description} className={css.img} />
      <p>Author: {name}</p>
      <p>Likes: {likes}</p>
    </Modal>
  );
};

export default ImageModal;
