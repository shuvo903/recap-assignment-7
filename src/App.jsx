import Navbar from "./Navbar/Navbar";
import './App.css'
import Footer from "./Footer/Footer";
import Banner from "./Banner/Banner";
import Mains from "./Mains/Mains";
import { ToastContainer, toast } from "react-toastify";
import { MdFavoriteBorder } from "react-icons/md";
import { HiX } from "react-icons/hi";
import { useState } from "react";

const App = () => {
  const [totalAmount, setTotalAmount] = useState(0);

  const [bookMark, setBookMark] = useState([]);

  const [removeFavoriteItems, setRemoveFavoriteItems] = useState(0);

  const handleRemoveFavoriteItems = (id) => {
    console.log(id);
    setRemoveFavoriteItems(removeFavoriteItems);

    toast.warn('Remove Items to Favorite Items', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  const handleAddPrice = (price) => {
    const TotalBidsAmount = totalAmount + price;

    setTotalAmount(TotalBidsAmount);
  };
  const handleBookMark = (main) => {
    setBookMark([...bookMark, main]);
    toast(
      <p className="text-[14px] text-center font-bold">
        Item Added To Your Favorite List
      </p>
    );
  };

  return (
    <div className="bg-[#EDF0F5]">
      <Navbar></Navbar>
      <Banner></Banner>

      {/* Items Container */}

      <div className="ml-44 absolute mt-36 ">
        <h1 className="text-[#0E2954] text-3xl font-medium">Active Auctions</h1>
        <p className="text-black text-xl mt-5 mb-9">
          Discover and bid on extraordinary items
        </p>
      </div>

      <div className="max-w-screen-2xl mx-auto flex gap-6">
        <div className=" left-container w-[70%] mt-64 mb-36">
          <Mains
            handleBookMark={handleBookMark}
            handleAddPrice={handleAddPrice}
            handleRemoveFavoriteItems={handleRemoveFavoriteItems}
          ></Mains>
        </div>

        {/* Favorite Items Container */}

        <div className="right-container w-[30%] mt-64 ">
          <div className="bg-white rounded-3xl p-8 text-center ">
            <div className="flex justify-center items-center">
              <h2 className="text-[#0E2954] text-3xl font-medium text-center mb-4 mr-3">
                <MdFavoriteBorder />
              </h2>
              <h2 className="text-[#0E2954] text-3xl font-medium text-center mb-4 ">
                Favorite Items
              </h2>
            </div>

            <p className="border-b border-gray-300"></p>
            <div className="text-center">
                <div className="">
                  {bookMark.map((marked) => (
                    <tr className="hover:bg-gray-50 transition duration-200 flex  text-left items-center p-3 rounded-3xl gap-4 mt-8 border-2 border-black">
                      <div>
                        <td className="items-center text-gray-700">
                          <img
                            className="h-24 w-24 p-2 rounded-2xl border-2 object-cover"
                            src={marked.image}
                            alt=""
                          />
                        </td>
                      </div>
                      <div>
                        <td className="flex text-[#0E2954] font-bold ">
                          {marked.title}
                        </td>
                        <td className=" flex text-center text-xl text-[#0E2954] font-semibold">
                          {marked.currentBidPrice}
                        </td>

                        <td className="text-center text-xl  text-[#0E2954] font-semibold">
                          Bids: {marked.bidsCount}
                        </td>
                      </div>
                      <div>
                        <button className=" " onClick={() => handleRemoveFavoriteItems()}></button>
                      <HiX  size={43} className="hover:text-red-500" />
                      </div>
                    </tr>
                  ))};
                </div>


              <div className={`${bookMark.length > 0 && "hidden "}`}>
                <h4 className="text-3xl font-medium text-black mt-12 mb-6">
                  No favorites yet
                </h4>
                <p className="text-black text-xl mb-12">
                  Click the heart icon on any item <br /> to add it to your
                  favorites
                </p>
              </div>
              <div className="flex text-black justify-between mt-7 border-t border-gray-300">
                <h2 className="mt-4  text-2xl font-semibold">
                  Total bids Amount
                </h2>
                <p className="mt-4 text-3xl font-medium">${totalAmount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
};

export default App;
