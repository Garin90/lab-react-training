import './App.css';
import LikeButton from './components/LikeButton';
import ClickablePicture from "./components/ClickablePicture";
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook'

function App() {
  return (
    <div className="App d-flex flex-column">
      <LikeButton />
      <ClickablePicture img='/maxence.png' imgClicked='/maxence-glasses.png'/>
      <Dice />
      <Carousel images={[
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg'
      ]}
      />
      <NumbersTable limit={12} />
      <Facebook />
    </div>
  );
}

export default App;
