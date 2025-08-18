export default function Header(){
    return(
      <div className="flex items-center justify-between font-[Work Sans] text-white bg-slate-950 border-b-1 border-white/10 py-4 px-20">
        <div className="font-[LimeLight] font-bold text-xl">
          MemeScrapper
        </div>
        <div className="flex text-slate-400 font-medium  gap-10 ">
          <span className="hover:text-slate-200 hover:cursor-pointer duration-300 py-1">Home</span>
          <span className="hover:text-slate-200 hover:cursor-pointer duration-300 py-1">About</span>
          <span className="hover:text-slate-200 hover:cursor-pointer duration-300 rounded py-1 px-3 text-white/70 bg-slate-800">Log in</span>
        </div>
      </div>
    )
}
