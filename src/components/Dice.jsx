import { useState } from 'react'
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const diceFaces =[dice1, dice2, dice3, dice4, dice5, dice6];



function Dice() {
    const [diceFaceShown, setDiceFaceShown] = useState(dice3)

    const random = Math.floor(Math.random()*6);
    
    
    function handleOnClick(){

      setDiceFaceShown(diceEmpty)

      setTimeout(() => {
        setDiceFaceShown(diceFaces[random])
      }, 1000);
      console.log(random)


    }

  return (
    <button onClick={handleOnClick}><img src={diceFaceShown} style={{width:100}} alt='Dice'></img></button>
  )
}

export default Dice