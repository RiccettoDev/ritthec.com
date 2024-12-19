import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import CardCompanie from "./cardCompanie";

import notebook from "../../../img/macbook.png"
import webDesigner from "../../../img/Web-designer.jpg"
import company from "../../../img/company.png"
import Watermark from "./watermark";

export default function Companies() {
    return (
        <section className="bg-background3 w-full flex flex-col p-16 relative shadow-xl">
            <div className="w-full flex flex-col sm:flex-row z-10">
                <div className="w-full sm:w-[50%] flex flex-col gap-8 mt-8">
                    <h2 className="font-extrabold">FEATURE CLIENTS</h2>
                    <h1 className="text-3xl font-extrabold">Stonewood Grill & Tavern</h1>
                    <h3>hjasvhjdsahsajhhjashjsasahsahjsvahjsavhsa jbjkasb jsajksajasjhsja jhsajkbsja hsbajhsjsjhbgsjhgs hasjhsajgs sjhgsjgsjh hsgh gshjugsjhgsjhgs hsghgshjgs hshhshs hshgshghsghsg hshs hgshgshgsh shshshgshgsjhghags</h3>
                    <div className="flex gap-10">
                        <button className="flex border justify-center items-center gap-2 bg-[#FFB101] rounded-full px-4 h-10 text-black hover:bg-black hover:text-white transition-all duration-300">
                            Clique Aqui
                            <FaAngleRight />
                        </button>
                        <button className="flex border justify-center items-center gap-2 border-black rounded-full px-4 h-10 text-black hover:bg-black hover:text-white transition-all duration-300">
                            Clique Aqui
                            <FaAngleRight />
                        </button>
                    </div>
                </div>

                <div className="flex w-full sm:w-[50%] mt-16 justify-center relative">
                    <div className="w-full sm:w-[80%] flex justify-center items-center z-10">
                        <Image src={notebook} alt="image notbook" width={600} height={500}/>
                    </div>
                    <div className="flex justify-center absolute z-20 w-[77%] sm:w-[62%] h-[85%] sm:h-[83.5%] bg-black mt-2 sm:mt-3 rounded-lg">
                        <Image src={webDesigner} alt="image web designer" className="w-[100%] rounded-md" />
                    </div>
                    <div className="absolute z-10 flex w-[120%] sm:w-[100%] h-4 -bottom-4 bg-black opacity-35 rounded-lg mt-2 blur-sm"></div>
                </div>
            </div>

            <div className="flex w-full gap-4 mt-[5em]">
                <button className="flex border justify-center items-center gap-2 border-black rounded-full p-4 bg-black text-white hover:bg-white hover:text-black transition-all duration-300">
                    <FaArrowLeft />
                </button>

                <button className="flex border justify-center items-center gap-2 border-black rounded-full p-4 text-black hover:bg-black hover:text-white transition-all duration-300">
                    <FaArrowRight />
                </button>
            </div>

            <div className="flex flex-col w-full mt-20 pb-16 gap-10">
                <div className="flex flex-col sm:flex-row w-full gap-6">
                    <CardCompanie img={company} />
                    <CardCompanie img={company} />
                    <CardCompanie img={company} />
                    <CardCompanie img={company} />
                </div>
                
                <div className="flex flex-col sm:flex-row w-full gap-6">
                    <CardCompanie img={company} />
                    <CardCompanie img={company} />
                    <CardCompanie img={company} />
                    <CardCompanie img={company} />
                </div>
            </div>
            
            {/** marca d'agua */}
            <Watermark />

        </section>
    )
}