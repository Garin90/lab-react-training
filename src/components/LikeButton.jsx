import { useState } from 'react';

function LikeButton() {
    const [counter, setCounter] = useState(0);
    
    function handleOnClick() {
        setCounter((prev) => prev+1);
    }

    const handleColorButton = () => {

switch (counter) {
    case 0:
        return 'bg-success'        
        break;
    case 1:
        return 'bg-danger'        
        break;
    case 2:
        return 'bg-secondary'        
        break;
    case 3:
    return 'bg-primary'        
    break;
    default:
        return ''
        break;
}

    }


    return <button className={handleColorButton()} onClick={handleOnClick}>{counter} Likes</button>
}

export default LikeButton;