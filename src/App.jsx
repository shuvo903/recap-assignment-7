import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Banner from './Banner/Banner';
import Main from './Main/Main';
import Mains from './Mains/Mains';

const App = () => {
  return (
    <div  className='bg-[#EDF0F5]'>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='max-w-screen-2xl mx-auto flex gap-6'>
      <div className='left-container w-[70%]'>
      <Mains></Mains>
      </div>
        <div className='right-container w-[30%]'>
        <Mains></Mains>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;