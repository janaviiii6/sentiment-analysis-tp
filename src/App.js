import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar';
import Herosection from './Components/Herosection';
import Features from './Components/Features';
import SentimentInfo from './Components/SentimentInfo';
import SentimentWorkSection from './Components/SentimentWorkSection';
// import CategoriesSection from './Components/CategoriesSection';
const App = () => {
  return (
    <div>
      <Navbar />
      <Herosection/>
      <Features/>
      <SentimentInfo/>
      <SentimentWorkSection/>
      {/* <CategoriesSection /> */}
      {/* Add other components/content below the Navbar */}
    </div>
  );
};

export default App;
