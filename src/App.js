import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';
import HeroSlider from './components/Home/HeroSlider/HeroSlider';
import Services from './components/Home/Services/Services';
import Reviews from './components/Home/Reviews/Reviews'
import Departments from './components/Home/Departments/Departments';
import Doctors from './components/Home/Doctors/Doctors';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <HeroSlider></HeroSlider>
      <Doctors></Doctors>
      <Services></Services>
      <Reviews></Reviews>
      <Departments></Departments>
    </BrowserRouter>
  );
}

export default App;
