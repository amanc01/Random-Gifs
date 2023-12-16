import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

/**
 * Renders a component that displays a random GIF.
 *
 * @returns {JSX.Element} The Random component.
 */
export default function Random() {
  // const [gif, setGif] = useState(""); // State variable to store the GIF URL
  // const [loading, setLoading] = useState(false); // State variable to track loading state

  // async function fetchData() {
  //   try {
  //     setLoading(true); // Set loading state to true
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`; // API endpoint to fetch random GIF
  //     const { data } = await axios.get(url); // Fetch data from the API
  //     const imageSrc = data.data.images.downsized_large.url; // Extract the URL of the GIF from the response
  //     setGif(imageSrc); // Update the GIF URL in the state
  //     setLoading(false); // Set loading state to false
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  // useEffect(() => {
  //   fetchData(); // Fetch data when the component mounts
  // }, []);
  const {gif, loading, fetchData} = useGif();
  function clickHandler() {
    fetchData(); // Fetch new random GIF on button click
    // console.log("click");
  }

  return (
    <div className="w-1/2 bg-[#287c4d] items-center gap-y-10 mt-[30px] 
    rounded-lg border-dashed border-2 border-white flex flex-col">
      <h1 className="text-2xl unlerline uppercase font-bold text-white 
      mt-[10px] underline">A Random Gif</h1>
      <div className="relative overflow-hidden">
        {
          loading ? (<Spinner/>) :<img src={gif} 
          className="max-w-full max-h-full" alt="Random Gif" />
        }
        
      </div>
      <button onClick={clickHandler} 
      className="w-10/12 bg-white mbopacity-70 
      font-bold rounded mb-4 py-1">
        Generate
      </button>
    </div>
  );
}
