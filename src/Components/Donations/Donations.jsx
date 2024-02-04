import { useEffect, useState } from "react";
import Donation from "../Donation/Donation";

const Donations = () => {
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    const url = "donation.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);
  // console.log(donations);
  return (
    <div className="my-5">
      {/* <h1>this is donations page{donations.length}</h1> */}
      <div className="md:grid md:grid-cols-4 md:gap-4">
        {donations.map((donation) => (
          <Donation key={donation.id} donation={donation}></Donation>
        ))}
      </div>
    </div>
  );
};

export default Donations;
