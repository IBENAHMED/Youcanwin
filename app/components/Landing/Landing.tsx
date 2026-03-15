import IconLamp from "../Icons/IconLamp";
import IconRightArrow from "../Icons/IconRightArrow";

export default function Landing() {
  return (
    <div className="Landing pl-6.5 pt-6.5 bg-[#f1f7f7]">
      <section className="bg-white h-full rounded-2xl shadow-md py-8 flex flex-col items-center text-center lg:text-left lg:flex-row lg:justify-between lg:items-center">
        <div className="text-black flex flex-col justify-between h-screen max-w-160 lg:pl-16">
          <h1 className="font-bold text-[72px] leading-18 tracking-[-1.8px]">Transformez chaque <span className="bg-linear-to-r from-[#16A34A] to-[#0B6B3A] bg-clip-text text-transparent">produit</span> en expérience de jeu</h1>
          <p className="font-normal text-[24px] leading-8 text-[#475569] pt-12">
            YouCanWin connecte vos marques aux fans de
            football à travers des mécaniques de
            gamification innovantes. <span className="font-bold text-black"> Codes QR, cartes
              digitales, défis et récompenses. </span>
          </p>
          <ul className="flex justify-between py-12">
            <li className="flex flex-col"><span className="font-bold text-[36px] leading-10 text-[#0B6B3A]">500K</span><span className="font-medium text-[14px] leading-5 text-[#475569]">Interactions/mois</span></li>
            <li className="flex flex-col"><span className="font-bold text-[36px] leading-10 text-[#B01219]">50+</span><span className="font-medium text-[14px] leading-5 text-[#475569]">Marques actives</span></li>
            <li className="flex flex-col"><span className="font-bold text-[36px] leading-10 text-[#0B6B3A]">x3.5</span><span className="font-medium text-[14px] leading-5 text-[#475569]">ROI moyen</span></li>
          </ul>
          <div className="flex gap-3">
            <button className="cursor-pointer rounded-xl px-8 pt-[17.5px] pb-[18.5px] font-medium text-[14px] leading-5 bg-linear-to-r from-[#16A34A] to-[#0B6B3A] text-white py-2 flex items-center gap-3 hover:from-[#0B6B3A] hover:to-[#16A34A] transition-colors duration-300">
              Voir la démo
              <IconRightArrow className="" size={16} />
            </button>
            <button className="cursor-pointer font-medium text-[14px] border border-[#CBD5E1] leading-5 bg-linear-to-r bg-white text-black px-4 py-2 rounded flex items-center gap-3 hover:from-[#0B6B3A] hover:to-[#16A34A] transition-colors duration-300">
              Comment ça marche
              <IconLamp className="text-black" size={16} />
            </button>
          </div>
          <div className="border-t border-t-[#E2E8F0] pt-6 mt-12 bg-white">
            <p className="text-[#64748B] pb-4 uppercase font-medium text-[12px] leading-4 tracking-[0.3px]">Ils nous font confiance</p>
            <ul className="flex justify-center gap-6 text-[#94A3B8] font-medium text-[14px] leading-4 lg:justify-start">
              <li>Maroc Telecom</li>
              <li>Inwi</li>
              <li>Orange</li>
              <li>Carrefour</li>
            </ul>
          </div>
        </div>
        <div className="mt-28 lg:mt-0">
          <img src={"/collection.svg"} alt="Collection Image" />
        </div>
      </section>
    </div>
  )
}