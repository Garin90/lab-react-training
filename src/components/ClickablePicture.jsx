import { useState } from 'react'

function ClickablePicture({ img, imgClicked }) {
    const [image, setImage] = useState(img)

    const handleOnClick = () => {
        setImage((prev) => prev === img ? imgClicked : img)
    }


    return <button onClick={handleOnClick}><img src={image} alt='maxPicture'></img></button>
}

export default ClickablePicture;