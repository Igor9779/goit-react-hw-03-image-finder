
const ImageGalleryItem = ({src, alt, largeImageURL, openModal}) => {
    return (
        <div>
            <li onClick={()=> openModal(largeImageURL)}>
                <img src={src} alt={alt} />
            </li>
        </div>
    ) 
}

export default ImageGalleryItem
