import Image from "next/image";
import { FaAngleRight, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";

import logo from "../../../../public/logo.png"
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
    return (
        <footer className="flex flex-col w-full justify-between bg-background1 p-16">
            <div className="flex flex-col sm:flex-row gap-10">
                <div className="w-full sm:w-[33%] flex sm:flex-col pt-4 gap-10">
                    <div className="w-[50%]">
                        <h1 className="text-3xl font-extrabold text-background4">Ready to Get Started?</h1>

                    </div>
                    <button className="
                        flex w-36 border justify-center items-center gap-2 bg-background3 rounded-full px-4 h-10 text-black hover:bg-[#FFB101] hover:text-black transition-all duration-300"
                    >
                        Contato
                        <FaAngleRight />
                    </button>
                </div>
                
                <div className="w-full flex flex-row justify-between">
                    <div className="w-[70%] sm:w-[50%] flex flex-col justify-end sm:items-end mt-6 sm:mt-1">
                        <Image src={logo} alt="logo" className="w-[230px] -mt-16 -ml-10 sm:-ml-0" />
                        <div className="w-[70%] sm:w-[50%] -mt-6 sm:-mt-10">
                            <h3 className="text-background4 text-center">
                                Americana - SP - 13473-xxx - contato@ritthec.com
                            </h3>
                        </div>
                    </div>
                    
                    <div className="w-[30%] sm:w-[50%] h-full flex flex-col justify-center items-end gap-4 mt-16 sm:mt-1">
                        <h2 className="font-extrabold text-background4">LINKS</h2>
                        <div className="flex flex-col items-end">
                            <button className="hover:opacity-50">
                                <h3 className="text-background4">Home</h3>
                            </button>
                            <button className="hover:opacity-50">
                                <h3 className="text-background4">Sobre</h3>
                            </button>
                            <button className="hover:opacity-50">
                                <h3 className="text-background4">Clientes</h3>
                            </button>
                            <button className="hover:opacity-50">
                                <h3 className="text-background4">Blog</h3>
                            </button>
                            <button className="hover:opacity-50">
                                <h3 className="text-background4">Contato</h3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[2px] bg-background4 opacity-30 mt-10"></div>

            <div className="flex justify-center items-center w-full pt-8">
                <h3 className="text-background4"> © 2024 - Ritthec | All rights reserved </h3>
            </div>
            <div className="flex justify-center sm:justify-end gap-4 right-14 sm:right-14 bottom-5 sm:bottom-10 mt-6">

                    <button className="border rounded-full p-1 hover:scale-110">
                        <BsFacebook size={15} color="#FFFFFF"/>
                    </button>

                    <button className="border rounded-full p-1 hover:scale-110">
                        <RiInstagramFill size={15} color="#FFFFFF"/>
                    </button>

                    <button className="border rounded-full p-1 hover:scale-110">
                        <FaYoutube size={15} color="#FFFFFF"/>
                    </button>

                    <button className="border rounded-full p-1 hover:scale-110">
                        <FaSquareXTwitter size={15} color="#FFFFFF"/>
                    </button>

                    <button className="border rounded-full p-1 hover:scale-110">
                        <IoLogoLinkedin size={15} color="#FFFFFF"/>
                    </button>
                </div>
        </footer>
    )
}