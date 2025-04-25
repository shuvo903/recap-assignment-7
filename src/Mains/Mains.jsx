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
          <h1 className="text-[#0E2954] text-3xl font-medium mt-36">
            Active Auctions
          </h1>
          <p className="text-black text-xl mt-5 mb-9">
            Discover and bid on extraordinary items
          </p>
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table min-w-full text-left text-sm font-medium">
              {/* head */}
              <thead>
                <tr>
                  
                  <th className="px-6 py-4 ml-5">Items</th>
                  <th className="px-6 py-4 ml-5">Current Bid</th>
                  <th className="px-6 py-4 ml-5">Time Left</th>
                  <th className="px-6 py-4 ml-5">Bid Now</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {mains.map((main) => <Main main={main}>
                    
                </Main>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mains;
