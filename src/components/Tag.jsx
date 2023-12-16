import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif"; // Import the missing useGif hook

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {
  // const [gif, setGif] = useState(""); // state to store the gif URL
  // const [loading, setLoading] = useState('false'); // state to track loading status
  const [tag, setTag] = useState('sasuke'); // state to store the tag for the gif

  // async function fetchData() {
  //   try {
  //     setLoading(true); // set loading status to true
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`; // API endpoint URL
  //     const { data } = await axios.get(url); // fetch data from the API
  //     const imageSrc = data.data.images.downsized_large.url; // extract the URL of the gif image
  //     setGif(imageSrc); // update the gif state with the image URL
  //     setLoading(false); // set loading status to false
  //   } catch (error) {
  //     console.error("Error fetching data:", error); // log error if data fetching fails
  //   }
  // }

  // useEffect(() => {
  //   fetchData(); // fetch data when the component mounts
  // }, []);
  const {gif, loading, fetchData} = useGif(tag);
  function clickHandler() {
    fetchData(); // fetch data when the button is clicked
    // console.log("click");
  }

  function changeHandler(event){
    setTag(event.target.value); // update the tag state when the input value changes
  }

  return (
    <div className="w-1/2 bg-[#284f7b] items-center gap-y-5 mt-[30px] 
    rounded-lg border-dashed border-2 border-white flex flex-col">
      <h1 className="text-2xl unlerline uppercase font-bold text-white 
      mt-[10px] underline">Random {tag} Gif</h1>

      {
        loading ? (<Spinner />) : <img src={gif}
          className="max-w-full max-h-full" alt="Random Gif" />
      }

      <input
      className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
      onChange={changeHandler}
      value={tag}
      />

      <button onClick={clickHandler}
        className="w-10/12 bg-white mbopacity-70 
      font-bold rounded mb-4 py-1">
        Generate
      </button>
    </div>
  );
}