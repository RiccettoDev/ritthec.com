import { FaAngleRight, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import CardBlog from "./cardBlog";

import imgTest from "../../../img/company.png"

export default function Blog() {
    return (
        <section className="flex flex-col sm:flex-row w-full bg-background4 p-16 shadow-xl">
            <div className="flex flex-col w-full sm:w-[30%] gap-8 mt-16">
                <h2 className="font-extrabold">OUR BLOG</h2>
                <h1 className="text-3xl font-extrabold">Thoughts & Ideas</h1>
                <button className="flex w-36 border justify-center items-center gap-2 bg-[#FFB101] rounded-full px-4 h-10 text-black hover:bg-black hover:text-white transition-all duration-300">
                    Clique Aqui
                    <FaAngleRight />
                </button>

                <div className="flex w-full gap-4 mt-[5em]">
                    <button className="
                        flex border justify-center items-center gap-2 border-black rounded-full p-4 bg-black text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                        <FaArrowLeft />
                    </button>

                    <button className="
                        flex border justify-center items-center gap-2 border-black rounded-full p-4 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                        <FaArrowRight />
                    </button>
                </div>
                <div className="w-[80%] h-[5px] bg-black"></div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center w-full sm:w-[70%] gap-2 mt-16">
                <CardBlog img={imgTest} text="hjasgvhasg nhasguhjsagu hjgvsahygsahgsahj hjashjgvsa" />
                <CardBlog img={imgTest} text="hjasgvhasg nhasguhjsagu hjgvsahygsahgsahj hjashjgvsa" />
                <CardBlog img={imgTest} text="hjasgvhasg nhasguhjsagu hjgvsahygsahgsahj hjashjgvsa" />
            </div>
        </section>
    )
}