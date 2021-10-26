import { Component } from "react";
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

class App extends Component {
  state = {
    query: "",
    page: 1,
    images: [],
    error: "",
    largeImageURL: "",
    tags: "",
    showModal: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;

    if (prevQuery !== nextQuery) {
      this.getPictureFetch();
    }

    if (this.state.page !== 1 && prevState.page !== this.state.page) {
      this.scroll();
    }
  }

  getPictureFetch = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });

    fetchPicture({ query, page })
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleFormSubmit = (query) => {
    this.setState({ query, page: 1, images: [] });
  };

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  openModalImage = ({ largeImageURL, tags }) => {
    this.setState({ largeImageURL, tags });
    this.toggleModal();
  };

  onLoadMore = () => {
    this.getPictureFetch();
  };

  render() {
    const { page, images, showModal, largeImageURL, tags, isLoading } =
      this.state;
    const showLoadMore = page !== 1 && images.length > 0 && images.length >= 12;

    return (
      <div className="Wrapper">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} openModalImage={this.openModalImage} />

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
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}

        {showLoadMore && <Button onLoadMore={this.onLoadMore} />}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
