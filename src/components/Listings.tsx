/** @format */

import { productCard } from "../constants";
import ProductCards from "./Cards";

const Listings = () => {
  return (
    <>
      <div className="sm:p-16 xs:p-8 px-6 py-12 relative z-10 bg-blue-700">
        <div className="max-w-6xl px-6 mx-auto">
          <h1 className="md:text-5xl text-4xl font-bold text-white my-4 ">
            Property List
          </h1>
          <p className="text-lg  font-serif text-gray-300">
            Property list with details
          </p>
        </div>
      </div>
      <div className="sm:p-16 xs:p-8 py-12">
        <div className="max-w-6xl px-6 mx-auto mb-6">
          <div className="flex justify-between items-center">
            <p>Showing 1 of 1 Results</p>

            <button className="bg-primary-700 border border-blue-700 font-medium rounded-lg text-sm px-4 py-1 text-center inline-flex items-center">
              Filter <span></span>
            </button>
          </div>
        </div>
        <div className="max-w-6xl px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {productCard.map((card, index) => (
              <ProductCards key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Listings;
