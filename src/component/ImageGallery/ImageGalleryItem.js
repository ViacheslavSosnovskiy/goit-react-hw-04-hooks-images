import "../App.css";

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  openModalImage,
}) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        largeImageURL={largeImageURL}
        onClick={() => openModalImage({ largeImageURL })}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;
