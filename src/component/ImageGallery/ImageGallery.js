import ImageGalleryItem from "./ImageGalleryItem";
import "../App.css";

const ImageGallery = ({ images, openModalImage }) => {
  return (
    <ul className="ImageGallery">
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          openModalImage={openModalImage}
          {...image}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

// ========================================================

// import { Component } from "react";
// // import ImageGalleryItem from "./ImageGalleryItem";
// // ==================
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// import "../App.css";

// // // spiner
// // import Loader from "react-loader-spinner";
// // import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// // // components
// // import ImageGallery from "./ImageGallery";
// // import Searchbar from "./Searchbar";
// // import Button from "./Button";
// // import Modal from "./Modal";

// import fetchPicture from "../services/fetchApi";

// class ImageGallery extends Component {
//   state = {
//     pictures: [],
//     page: 1,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevQuery = prevProps.query;
//     const nextQuery = this.props.query;
//     if (prevQuery !== nextQuery) {
//       this.setState({ pictures: [], page: 1 });
//       this.getPictureFetch();
//     }

//     if (prevState.pictures !== this.state.pictures) {
//       this.scroll();
//     }
//   }

//   getPictureFetch = (page) => {
//     const { pictures } = this.state;
//     const { query } = this.props;

//     // this.setState({ status: "PENDING" });

//     fetchPicture(query, page)
//       // .then({ hits, total }).then(console.log(hits));
//       // .then((pictures) => {
//       //   const pictures = array.hits;
//       //   // console.log("array", array);
//       //   // console.log("array.hits", array.hits);
//       //   if (pictures.length < 1) {
//       //     // toast.error("Ничего не найдено");
//       //     alert("ghdh!");
//       //   }
//       // })
//       .then(({ pictures }) => {
//         this.setState((prevState) => ({
//           pictures: [...prevState.pictures, ...pictures],
//           page: prevState.page + 1,
//         }));
//       });
//   };

//   scroll = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: "smooth",
//     });
//   };

//   render() {
//     return (
//       // <ul className="ImageGallery">
//       {
//         /* //   {pictures.map(({ webformatURL, largeImageURL, tags, id }) => ( */
//       }
//       //     <ImageGalleryItem
//       //       key={id}
//       //       webformatURL={webformatURL}
//       //       largeImageURL={largeImageURL}
//       //       tags={tags}
//       //       openModalImage={openModalImage}
//       // />
//       //   ))}
//       // </ul>
//     );
//   }
// }

// export default ImageGallery;

// ============================================
