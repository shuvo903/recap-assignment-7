
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Banner from './Banner/Banner';
import Mains from './Mains/Mains';
import { MdFavoriteBorder } from "react-icons/md";
import { useState } from 'react';

const App = () => {

  const [favoriteItems,setFavoriteItems] = useState()
  
  return (
    <div  className='bg-[#EDF0F5]'>
      <Navbar></Navbar>
      <Banner></Banner>

      <div className='ml-44 absolute mt-36 '>
      <h1 className="text-[#0E2954] text-3xl font-medium">
            Active Auctions
          </h1>
          <p className="text-black text-xl mt-5 mb-9">
            Discover and bid on extraordinary items
          </p>
      </div>
           
      <div className='max-w-screen-2xl mx-auto flex gap-6'>
             
      <div className=' left-container w-[70%] mt-64 mb-36'>

      
      <Mains></Mains>
      
      </div>
        <div className='right-container w-[30%] mt-64 '>
        <div className='bg-white rounded-3xl p-8 text-center '>
          <div className="flex justify-center items-center">
          <h2 className='text-[#0E2954] text-3xl font-medium text-center mb-4 mr-3'><MdFavoriteBorder /></h2>
          <h2  className='text-[#0E2954] text-3xl font-medium text-center mb-4 '>Favorite Items</h2>
          </div>
          <p className='border-b border-gray-300'></p>
         <div className="text-center"> 
          <h4 className='text-3xl font-medium text-black mt-12 mb-6'>No favorites yet</h4>
          <p className='text-black text-xl mb-12'>Click the heart icon on any item <br /> to add it to your favorites</p>
          <p className='border-b border-gray-300'></p>
          <div className='flex justify-between mt-7'>
          <h2 className='text-black text-2xl font-semibold'>Total bids Amount</h2>
          <p className='text-3xl font-medium'>$0000</p>
          </div>
          </div>
        </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;