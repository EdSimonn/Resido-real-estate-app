/** @format */

import { BiBath, BiBed, BiCross, BiLocationPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

interface EstateCardProps {
  id: number;
  img: string;
  title: string;
  buttonColor: string;
  price: string;
  name: string;
  beds: string;
  baths: string;
  sqft: string;
  button: string;
  location: string;
}

const ProductCards = ({
  id,
  img,
  title,
  buttonColor,
  button,
  price,
  name,
  location,
  beds,
  baths,
  sqft,
}: EstateCardProps) => {
  return (
    <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img className="rounded-t-lg object-cover" src={img} alt="" />
      </a>
      <div className="p-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <p className="text-md text-gray-500 font-semibold">{title}</p>
            <h3 className="text-md text-gray-600 font-bold">{name}</h3>
          </div>
          <h2 className="text-xl text-blue-700 tracking-wide font-semibold">
            ${price}
          </h2>
        </div>

        <div className="flex justify-end flex-col md:flex-row gap-4 my-6">
          <p className="flex gap-2">
            <span className="bg-indigo-100 text-gray-500 text-xs py-1.5 px-1.5 rounded-full">
              <BiBed />
            </span>
            <span className="text-md text-gray-500 font-semibold">
              {beds} Beds
            </span>
          </p>
          <p className="flex gap-2 ">
            <span className="bg-indigo-100 text-gray-500 text-xs py-1.5 px-1.5 rounded-full">
              <BiBath />
            </span>
            <span className="text-md text-gray-500 font-semibold">
              {baths} Baths
            </span>
          </p>
          <p className="flex gap-2">
            <span className="bg-indigo-100 text-gray-500 text-xs py-1.5 px-1.5 rounded-full">
              <BiCross />
            </span>
            <span className="text-md text-gray-500 font-semibold">
              {sqft}sqft
            </span>
          </p>
        </div>

        <hr className="my-4 border-gray-200 sm:mx-auto" />

        <div className="flex justify-between items-center">
          <p className="flex gap-4 justify-center items-center">
            <span className="bg-indigo-100 text-gray-500 text-xs py-1.5 px-1.5 rounded-full">
              <BiLocationPlus />
            </span>
            <span className="text-md text-gray-500 font-semibold">
              {location}
            </span>
          </p>
          <Link to={`/listings/${id}`}>
            <button
              className={`rounded-full font-semibold px-3 py-1 bg-blue-700 text-white ${buttonColor}`}
            >
              {button}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
