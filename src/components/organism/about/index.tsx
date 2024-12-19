import { FaAngleRight } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TbAdjustmentsDollar } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";



import CardAbout from "./cardAbout";

export default function About() {
    return (
        <section className=" w-full p-[2em] pt-[500px]">
            <div className="flex flex-col md:flex-row gap-10">
                <div className="flex flex-col gap-10 w-full sm:w-1/2 sm:pl-10">
                    <div className="text-background3 font-semibold">
                        ABOUT US
                    </div>
                    <div className="text-background3 font-extrabold text-4xl">
                        Ritthec Web Desing and Software Developer - Americana - SP
                    </div>
                </div>
                <div className="flex flex-col gap-10 w-full sm:w-1/2 sm:p-10 sm:-mt-10">
                    <div className="text-background3">
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                    <button className="flex items-center justify-center gap-2 bg-background3 text-background1 w-24 p-1 rounded-full hover:scale-110">
                        start
                        <FaAngleRight />
                    </button>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="w-[95%] bg-background2 rounded-lg flex flex-col gap-10 p-8">
                    <div className="w-full flex flex-col sm:flex-row gap-6 justify-between">
                        <div className="sm:w-[30%] "><CardAbout /><VscGraph color="#FFB101" size={50}/></div>
                        <div className="sm:w-[30%] "><CardAbout /><IoShareSocialSharp color="#FFB101" size={50} /></div>
                        <div className="sm:w-[30%] "><CardAbout /><MdEmail color="#FFB101" size={50}/></div>
                    </div>
                    <div className="w-full flex flex-col sm:flex-row gap-6 justify-between">
                        <div className="sm:w-[30%] "><CardAbout /><TbAdjustmentsDollar /></div>
                        <div className="sm:w-[30%] "><CardAbout /></div>
                        <div className="sm:w-[30%] "><CardAbout /></div>
                    </div>
                </div>

            </div>

        </section>
    )
}