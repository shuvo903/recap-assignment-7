import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Banner from './Banner/Banner';
import Main from './Main/Main';
import Mains from './Mains/Mains';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Mains></Mains>
      <Footer></Footer>
    </div>
  );
};

export default App;