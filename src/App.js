import './App.css';
import LikeButton from './components/LikeButton';
import ClickablePicture from "./components/ClickablePicture";
import Dice from './components/Dice'

function App() {
  return (
    <div className="App d-flex flex-column">
      <LikeButton />
      <ClickablePicture img='/maxence.png' imgClicked='/maxence-glasses.png'/>
      <Dice />
    </div>
  );
}

export default App;
