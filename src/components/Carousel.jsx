import {useState} from 'react';

function Carousel({ images }) {
    const [index, setIndex] = useState(0)

    const handleLeft = () => {
        if (index === 0){
            setIndex(3)
        } else {
            setIndex((prev) => prev - 1)
        }
    }

    function handleRight() {
        return index === 3 ? setIndex(0) : setIndex((prev) => prev + 1); 
    }

    //console.log(index) //Por que este console.log se ejecuta 2 veces cada vez que le doy a un btn?


    return (
        <div>
            <button onClick={handleLeft}>left</button>
            <img src={images[index]} alt="img"></img>
            <button onClick={handleRight}>right</button>
        </div>
    )
}

export default Carousel;