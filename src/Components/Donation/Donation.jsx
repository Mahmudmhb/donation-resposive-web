import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Donation = ({ donation }) => {
  // console.log(donation);
  // eslint-disable-next-line react/prop-types
  const { logo, category, shortDescription, backgroundColor, color, id } =
    donation;
  return (
    <div style={{ backgroundColor }} className="w-72 h-72 ">
      <Link to={`/details/${id}`}>
        <div className=" ">
          <img src={logo} alt={category} />

          <div className=" pl-5">
            <h2 className="py-2">
              <p style={{ color }}> {category}</p>
            </h2>
            <p className="font-bold" style={{ color }}>
              {shortDescription}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Donation;
