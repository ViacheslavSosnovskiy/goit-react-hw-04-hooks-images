import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify"; // toast
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

// // spiner
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// // components
import ImageGallery from "./ImageGallery";
import Searchbar from "./Searchbar";
import Button from "./Button";
import Modal from "./Modal";

import fetchPicture from "../services/fetchApi";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [largeImageURL, setLargeImageURL] = useState("");
  const [tags, setTags] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");

  useEffect(() => {
    if (!query) {
      return;
    }
    getPictureFetch();
  }, [query]);

  const getPictureFetch = () => {
    setIsLoading(true);

    fetchPicture({ query, page })
      .then((images) => {
        setImages((prevImages) => [...prevImages, ...images]);
        setPage((prevPage) => prevPage + 1);
        if (page !== 1) {
          scroll();
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  const handleFormSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const openModalImage = ({ largeImageURL, tags }) => {
    setLargeImageURL(largeImageURL);
    setTags(tags);
    toggleModal();
  };

  const onLoadMore = () => {
    getPictureFetch();
  };

  const showLoadMore = page !== 1 && images.length > 0 && images.length >= 12;

  return (
    <div className="Wrapper">
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery images={images} openModalImage={openModalImage} />

      {isLoading && (
        <Loader
          type="ThreeDots" // Hearts
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      )}

      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}

      {showLoadMore && <Button onLoadMore={onLoadMore} />}
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default App;
