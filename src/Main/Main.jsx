import React from "react";

const Main = ({ main }) => {
  console.log(main)
  return (
    <div>
      <tr className="border-b border-gray-200 hover:bg-gray-50 transition duration-200">
        <td className="w-[50%] px-4  flex items-center gap-3 text-sm text-gray-700"><img src={main.image} alt="" /></td>
        <td>{main.title}</td>
        <td>{main.price}</td>
        <td>{main.timeLeft}</td>
        <td>
          <div className="tooltip" data-tip="hello">
            <button className="btn rating gap-1">
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
    </div>
  );
};

export default Main;
