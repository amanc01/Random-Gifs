import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";
// we have same code in App.jsx and Tag.jsx so we want
// to make a reusable component so we will create a new custom
// hook with name starting from useabc and then we will move
// the code from App.jsx and Tag.jsx to useRandom.jsx and
export default function App() {
  return(
    <div className="w-full flex flex-col background relative item-center">
      <h1 className=" bg-white rounded-lg w-11/12 text-center mt-[30px]
       px-10 py-2 text-3xl font-bold mx-auto">RANDOM GIFS</h1>
      <div className="flex flex-col w-full mb-5 items-center">
          <Random />
          <Tag/>
      </div>
    </div>
  );
}
