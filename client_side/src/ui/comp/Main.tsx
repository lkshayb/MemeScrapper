import MemeComp from "./MemeComp"

export default function Header(){
    return(
      <div className="flex justify-center items-center min-h-screen bg-slate-950 text-white font-[Work Sans]">
        <div className="font-bold text-4xl text-center">
            Your Daily Dose of Memes
            <div className="text-sm text-white/50 font-medium mt-2">Click the button below to discover a new meme from reddit</div>
            <div>
                <MemeComp/>
            </div>
        </div>
      </div>
    )
}
