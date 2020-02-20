import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Slider from './Slider';
import SCard from './SCard';
import BCard from './BCard';
import MiniFoot from './MiniFoot';
import Footer from './Footer';

function App() {
  return (
    <div>
      <div class="Container">
        <Navigation />
        <Slider />
        <SCard />
        <BCard />
        <MiniFoot />
      </div>
      <Footer />
    </div >
  );
}
export default App;
