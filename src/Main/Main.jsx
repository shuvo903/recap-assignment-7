import React, { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
const Main = ({ main , handleBookMark,handleAddPrice,handleRemoveFavoriteItems}) => {
  
  const [btnDisable, setBtnDisable] = useState(false);

  const handleBtnDisable = () => {
    setBtnDisable(!btnDisable);
  };
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
          {btnDisable && (
            <div>
              <button
                className="hover:cursor-not-allowed tooltip text-red-500"
                data-tip="Bookmark 🚫"
              >
                <MdFavorite />
              </button>
            </div>
          )}

          <button
            className={`hover:cursor-pointer  hover:text-red-500  ${
   btnDisable
       ? "hover:cursor-not-allowed tooltip text-red-500 hidden"
                : ""
            }`}
            onClick={() => {
              handleBtnDisable();
              handleBookMark(main);
              handleAddPrice(main.price);
              handleRemoveFavoriteItems(main.id)
             
            }}
          >
            <MdFavoriteBorder />
          </button>
        </div>
        
      </td>
      
    </tr>
    
  );
};

export default Main;
