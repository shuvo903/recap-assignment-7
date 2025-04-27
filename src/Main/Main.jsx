import React, { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
const Main = ({ main }) => {

  const [btnDisable, setBtnDisable,] = useState(false);

  const notify = () => {
    toast(<p className="text-[14px] text-center font-bold">Item Added Toy Your Favorite List</p>)
  }

  const handleBtnDisable = () => {
    setBtnDisable(!btnDisable)



  }
  return (

    <tr className="border-b border-gray-300 hover:bg-gray-50 transition duration-200">
      <td className="px-4 py-3 flex items-center gap-3 text-sm text-gray-700">
        <img
          className="h-24 w-24 rounded object-cover"
          src={main.image}
          alt=""
        />
      </td>
      <td className="px-4 py-3 text-center text-xl text-[#0E2954] font-semibold ">
        {main.title}
      </td>
      <td className="px-4 py-3 text-center text-xl text-[#0E2954] font-semibold">
        {main.currentBidPrice}
      </td>
      <td className="px-4 py-3 text-center text-xl text-[#0E2954] font-semibold">
        {main.timeLeft}
      </td>
      <td className="px-4 py-3 text-center text-3xl text-[#0E2954] font-semibold">
        <div>
          {
            btnDisable && <div>
              <button className="hover:cursor-not-allowed tooltip text-red-500" data-tip="Bookmark 🚫"><MdFavorite /></button>
            </div>
          }
          <button className={`hover:cursor-pointer  hover:text-red-500  ${btnDisable ? "hover:cursor-not-allowed tooltip text-red-500 hidden" : ""}`} onClick={() => {
            handleBtnDisable()
            notify()
          }

          }> <MdFavoriteBorder /> <ToastContainer />
          </button>
        </div>
      </td>
    </tr>

  );
};

export default Main;
