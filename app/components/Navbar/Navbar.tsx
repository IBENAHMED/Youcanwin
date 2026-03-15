import IconCup from "../Icons/IconCup";
import IconRightArrow from "../Icons/IconRightArrow";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          <div className="shrink-0 flex items-center">
            <IconCup className="text-[#16A34A]" size={50} />
            <a className="font-poppins mx-2 font-bold text-[20px] leading-7 tracking-[0%] align-middle">
              <span className="text-[#d62324]">You</span>
              <span className="text-black">can</span>
              <span className="text-[#0c713c]">win</span>
            </a>
            <span className="inline-block ml-0.75 mt-2 px-2 py-0.5 text-[#0B6B3A] bg-[#DCFCE7] rounded-full font-semibold text-[10px] leading-[15px]">GAMES</span>
          </div>

          <div className="hidden lg:flex space-x-8 items-center">
            <a href="#" className="text-gray-700 hover:text-[#16A34A]">Nos offres</a>
            <a href="#" className="text-gray-700 hover:text-[#16A34A]">Nos jeux</a>
            <a href="#" className="text-gray-700 hover:text-[#16A34A]">Album 2025</a>
            <a href="#" className="text-gray-700 hover:text-[#16A34A]">À propos</a>
            <button className="font-medium text-[14px] leading-5 bg-linear-to-r from-[#16A34A] to-[#0B6B3A] text-white px-4 py-2 rounded flex items-center gap-3 hover:from-[#0B6B3A] hover:to-[#16A34A] transition-colors duration-300">
              Demander une démo
              <IconRightArrow className="" size={16} />
            </button>
          </div>

          <div className="flex items-center lg:hidden">
            <button id="mobile-menu-button" className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className="lg:hidden hidden">
        <a href="#" className="block px-4 py-2 text-[#334155] hover:bg-gray-100">Home</a>
        <a href="#" className="block px-4 py-2 text-[#334155] hover:bg-gray-100">About</a>
        <a href="#" className="block px-4 py-2 text-[#334155] hover:bg-gray-100">Services</a>
        <a href="#" className="block px-4 py-2 text-[#334155] hover:bg-gray-100">Contact</a>
        <a href="#" className="block px-4 py-2 text-[#FFFFFF] bg-[#16A34A] hover:bg-indigo-700 rounded m-2 text-center">Sign Up</a>
      </div>
    </nav>
  );
};