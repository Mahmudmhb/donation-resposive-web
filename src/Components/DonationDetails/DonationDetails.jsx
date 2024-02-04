import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const parsID = parseInt(id);
  //   console.log(details);
  const findDonation = details.find((detail) => detail.id === parsID);
  const {
    backgroundColor,
    shortDescription,
    logo,
    heading,
    price,
    description,
  } = findDonation;
  return (
    <div>
      <h1>this is donation details page {shortDescription}</h1>
      <div className=" relative">
        <img className="w-full" src={logo} alt="" />
        <div
          className=" py-10 bottom-0 absolute w-full bg-black opacity-40  "
          style={{ backgroundColor }}
        >
          <button
            className=" btn btn-primary ml-10 p-3  text-white rounded"
            // style={{ color }}
          >
            Donate: ${price}
          </button>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-2xl font-bold py-5">{heading}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DonationDetails;
