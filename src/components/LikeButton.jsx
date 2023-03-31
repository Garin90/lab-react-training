import { useState } from 'react';

function LikeButton() {
    const [counter, setCounter] = useState(0);
    const btnStyle = ['purple','blue','green','yellow','orange','red'];
    
    function handleOnClick() {
        setCounter((prev) => prev+1);
    }

    const handleColorButton = () => {
        let laps = Math.floor((counter)/6);
        const index = counter - laps * 6;
        return btnStyle[index];


    }


    return <button style={{backgroundColor: handleColorButton()}} onClick={handleOnClick}>{counter} Likes</button>
}

export default LikeButton;