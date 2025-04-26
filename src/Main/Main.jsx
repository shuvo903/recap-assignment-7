import React from "react";

const Main = ({ main }) => {
  console.log(main);
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
        <td>
          <div className="tooltip" data-tip="hello">
            <button className="btn rating gap-1 ">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
                aria-label="1 star"
              />
            </button>
          </div>
          <div className=""></div>
        </td>
      </tr>

  );
};

export default Main;
