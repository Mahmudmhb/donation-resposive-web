import React from "react";
import bannar from "../../Resources/Health.png";

const Bannar = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bannar})`,
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-4xl text-black font-bold">
              I Grow By Helping People In Need
            </h1>

            <div>
              <input
                type="text"
                placeholder="Type here"
                className="input  w-full border max-w-xs"
              />
              <button className=" rounded p-3 bg-[#FF444A]">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
