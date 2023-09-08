/** @format */

import { useParams } from "react-router-dom";
import { productDetails } from "../constants";
import { BiBath, BiBed, BiCross } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";

const ListingPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { id }: any = useParams();
  const house = productDetails.find((p) => p.id === parseInt(id));

  if (!house) {
    return <div>House not found</div>;
  }

  return (
    <div className="bg-blue-50">
      <img
        src={house.img}
        alt=""
        className="max-h-[650px] w-full h-auto object-cover"
      />

      <div className="max-w-[1400px] px-6 mx-auto py-8">
        <div className="bg-white p-5 rounded-md shadow-md py-10">
          <p className="text-3xl text-blue-700 font-semibold">${house.price}</p>
          <div className="flex gap-4 pt-12">
            <p className="flex gap-2 justify-center items-center">
              <span className="bg-indigo-100 text-gray-500 text-xl py-1.5 px-1.5 rounded-full">
                <BiBed />
              </span>
              <span className="text-xl text-gray-500 font-semibold">
                {house.beds} Beds
              </span>
            </p>
            <p className="flex gap-2 justify-center items-center">
              <span className="bg-indigo-100 text-gray-500 text-xl py-1.5 px-1.5 rounded-full">
                <BiBath />
              </span>
              <span className="text-xl text-gray-500 font-semibold">
                {house.baths} Baths
              </span>
            </p>
            <p className="flex gap-2 justify-center items-center">
              <span className="bg-indigo-100 text-gray-500 text-xl py-1.5 px-1.5 rounded-full">
                <BiCross />
              </span>
              <span className="text-xl text-gray-500 font-semibold">
                {house.sqft}sqft
              </span>
            </p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-md shadow-md my-10">
          <div className="flex justify-between py-6">
            <p className="text-xl text-gray-800 font-semibold">
              Details & Features
            </p>
            <p>.</p>
          </div>
          <div className="flex flex-col max-w-xs gap-y-6">
            <p className="grid grid-cols-2">
              <span className="text-xl text-gray-800 font-semibold">
                Garage
              </span>
              <span className="text-xl text-gray-400 font-semibold">1</span>
            </p>
            <p className="grid grid-cols-2">
              <span className="text-xl text-gray-800 font-semibold">
                Area Size (Sqft)
              </span>
              <span className="text-xl text-gray-400 font-semibold">1200</span>
            </p>
            <p className="grid grid-cols-2">
              <span className="text-xl text-gray-800 font-semibold">
                Bedrooms
              </span>
              <span className="text-xl text-gray-400 font-semibold">4</span>
            </p>
            <p className="grid grid-cols-2 mb-6">
              <span className="text-xl text-gray-800 font-semibold">
                Washroom
              </span>
              <span className="text-xl text-gray-400 font-semibold">3</span>
            </p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-md shadow-md my-10">
          <div className="flex justify-between py-6">
            <p className="text-xl text-gray-800 font-semibold">Description</p>
            <p>.</p>
          </div>
          <p className="flex flex-col gap-y-6 ">
            <p className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem nisi unde quo fuga quibusdam fugit animi
              necessitatibus iusto rerum ipsa, quia ipsum veniam culpa voluptate
              accusamus assumenda non cupiditate esse Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Alias nesciunt omnis hic fuga eos
              perferendis quo aperiam eius necessitatibus temporibus aliquam, m
              dolor, sit amet consectetur adipisicing elit. Saepe ut
            </p>
            <p className="text-lg text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              beatae eos vitae saepe! Labore libero, minus provident culpa esse
              sequi voluptate nulla ut recusandae, laboriosam cum vero quo
              consequatur nihil.
            </p>
          </p>
        </div>

        <div className="bg-white p-5 rounded-md shadow-md my-10">
          <div className="flex justify-between py-6">
            <p className="text-xl text-gray-800 font-semibold">Amenities</p>
            <p>.</p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            <p className="flex gap-2">
              <span className="bg-green-100 text-green-500 text-xl py-1.5 px-1.5 rounded-full">
                <AiOutlineCheck />
              </span>
              <span className="text-xl text-gray-500 font-semibold">
                Air Conditioning
              </span>
            </p>
            <p className="flex gap-2">
              <span className="bg-green-100 text-green-500 text-xl py-1.5 px-1.5 rounded-full">
                <AiOutlineCheck />
              </span>
              <span className="text-xl text-gray-500 font-semibold">
                Central Heating
              </span>
            </p>
            <p className="flex gap-2">
              <span className="bg-green-100 text-green-500 text-xl py-1.5 px-1.5 rounded-full">
                <AiOutlineCheck />
              </span>
              <span className="text-xl text-gray-500 font-semibold">
                Internet
              </span>
            </p>
            <p className="flex gap-2">
              <span className="bg-green-100 text-green-500 text-xl py-1.5 px-1.5 rounded-full">
                <AiOutlineCheck />
              </span>
              <span className="text-xl text-gray-500 font-semibold">
                Alarm System
              </span>
            </p>
            <p className="flex gap-2">
              <span className="bg-green-100 text-green-500 text-xl py-1.5 px-1.5 rounded-full">
                <AiOutlineCheck />
              </span>
              <span className="text-xl text-gray-500 font-semibold">
                Car Packing
              </span>
            </p>
            <p className="flex gap-2">
              <span className="bg-green-100 text-green-500 text-xl py-1.5 px-1.5 rounded-full">
                <AiOutlineCheck />
              </span>
              <span className="text-xl text-gray-500 font-semibold">
                Window Covering
              </span>
            </p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-md shadow-md my-10">
          <div className="flex justify-between">
            <p className="text-xl text-gray-800 font-semibold">Property View</p>
            <p>.</p>
          </div>
          <div className="flex flex-col max-w-xs gap-y-6"></div>
        </div>

        <div className="bg-white p-5 rounded-md shadow-md my-10">
          <div className="flex justify-between">
            <p className="text-xl text-gray-800 font-semibold">Floor Plan</p>
            <p>.</p>
          </div>
          <div className="flex flex-col max-w-xs gap-y-6"></div>
        </div>

        <div className="bg-white p-5 rounded-md shadow-md my-10">
          <div className="flex justify-between">
            <p className="text-xl text-gray-800 font-semibold">Location</p>
            <p>.</p>
          </div>
          <div className="flex flex-col max-w-xs gap-y-6"></div>
        </div>

        <div className="bg-white p-5 rounded-md shadow-md my-10">
          <div className="flex justify-between">
            <p className="text-xl text-gray-800 font-semibold">Gallery</p>
            <p>.</p>
          </div>
          <div className="flex flex-col max-w-xs gap-y-6"></div>
        </div>

        <div className="bg-white p-5 rounded-md shadow-md my-10">
          <div className="flex justify-between">
            <p className="text-xl text-gray-800 font-semibold">Ratings</p>
            <p>.</p>
          </div>
          <div className="flex flex-col max-w-xs gap-y-6"></div>
        </div>

        <div className="bg-white p-5 rounded-md shadow-md my-10">
          <div className="flex justify-between">
            <p className="text-xl text-gray-800 font-semibold">
              Write A Review
            </p>
            <p>.</p>
          </div>
          <div className="flex flex-col max-w-xs gap-y-6"></div>
        </div>
      </div>
    </div>
  );
};
export default ListingPage;
