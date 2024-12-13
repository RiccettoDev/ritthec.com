import { FaAngleRight } from "react-icons/fa6";

export default function About() {
    return (
        <section className=" w-full p-16 pt-[500px]">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col gap-10 w-1/2">
                    <div className="text-background3 font-semibold">
                        ABOUT US
                    </div>
                    <div className="text-background3 font-extrabold text-4xl">
                        Ritthec Web Desing and Software Developer - Americana - SP
                    </div>
                </div>
                <div className="flex flex-col gap-10 w-1/2 pl-16">
                    <div className="text-background3">
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                    <button className="flex items-center justify-center gap-2 bg-background3 text-background1 w-24 p-1 rounded-full hover:scale-110">
                        start
                        <FaAngleRight />
                    </button>
                </div>
            </div>
        </section>
    )
}