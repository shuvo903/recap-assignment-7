import React, { useEffect, useState } from "react";
import Main from "../Main/Main";

const Mains = () => {
  const [mains, setMains] = useState([]);
  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setMains(data));
  }, []);
  console.log(mains);
  return (
    
    <div>
      
      <div className="max-w-screen-2xl mx-auto ">
        <div>
       
          <div className="overflow-x-auto rounded-3xl bg-white  p-6 shadow-md">
            <table className="min-w-full text-left text-sm font-medium">
              {/* head */}
              <thead className="">
                <tr className="bg-white text-black hover:bg-gray-100 transition duration-200">
                  <th className="px-6 py-4">Items</th>
                  <th className="px-6 py-4 "></th>
                  <th className="px-6 py-4 ml-5">Current Bid</th>
                  <th className="px-6 py4 ">Time Left</th>
                  <th className="px-6 py-4">Bid Now</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {/* row 1 */}
                {mains.map((main) => (
                  <Main main={main}></Main>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mains;
