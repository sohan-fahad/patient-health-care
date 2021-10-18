import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';
import HeroSlider from './components/Home/HeroSlider/HeroSlider';
import Services from './components/Home/Services/Services';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <HeroSlider></HeroSlider>
      <Services></Services>
    </BrowserRouter>
  );
}

export default App;
