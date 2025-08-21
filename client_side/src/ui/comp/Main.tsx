import { useState } from "react"
import MemeComp from "./MemeComp"
import axios from "axios";

export default function Main(){
    const [Loader,setLoader] = useState(false);

    async function GetMeme(){
      setLoader(true);
      const getmemes = await axios.get("https://www.reddit.com/r/memes/top/.json",{params : {limit:50,t:"all"}})
      console.log(getmemes.data.data.children[6].data)
      setLoader(false)
    }

    return(
      <div className="flex justify-center items-center min-h-screen bg-slate-950 text-white font-[Work Sans]">
        <div className="font-bold text-4xl text-center">
            Your Daily Dose of Memes
            <div className="text-sm text-white/50 font-medium mt-2">Click the button below to discover a new meme from reddit</div>
            <div>
                <MemeComp/>
            </div>
            <div >
              <button className="font-medium text-xl bg-orange-500 px-4 py-2 rounded-lg hover:opacity-80 duration-300 cursor-pointer my-5" onClick={GetMeme}>
                {Loader ? "Loading..." : "Get Memes"}
              </button>
            </div>
        </div>
      </div>
    )
}
