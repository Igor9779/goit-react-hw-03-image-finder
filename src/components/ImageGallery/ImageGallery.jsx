import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"

const ImageGallery = ({images, openModal}) => {
    return (
        <ul>
            {images.map(({ id, webFormatURL, tags, largeImageURL }) => (
                <ImageGalleryItem
                    key={id}
                    src={webFormatURL}
                    alt={tags}
                    openModal={openModal}
                    largeImageURL={largeImageURL}
                />
            ))}
        </ul>
    )
}

export default ImageGallery
