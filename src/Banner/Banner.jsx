import React from "react";
const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen w-[100%]"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/cKKn5tyb/Banner-min.jpg)",
        }}
      >
        <div className="max-w-screen-2xl mx-auto text-white w-full text-left">
          <h1 className="text-5xl font-bold ">
            Bid on Unique Items from <br /> Around the World
          </h1>
          <p className="mt-5 mb-8 text-xl font-light">
            Discover rare collectibles, luxury goods, and vintage <br /> treasures in
            our curated auctions
          </p>
          <button className="btn btn-primary bg-white text-black font-medium rounded-3xl px-8 py-4">Explore Auctions</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
