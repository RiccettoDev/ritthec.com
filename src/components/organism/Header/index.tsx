import { BsFacebook } from "react-icons/bs";
import { FaAngleRight, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

import Image from "next/image";
import bgHeader from "../../../../public/bg-header.png";
import logo from "../../../../public/logo.png";

export default function Header() {
    return (
        <header
            className="bg-background1 w-full h-screen flex flex-col justify-center items-center pt-[18em] relative"
            style={{
                backgroundImage: `url(${bgHeader.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >

            <div className="z-10">
                <Image src={logo} alt="image logo" width={250} />
            </div>
            
            <div className="hidden lg:flex absolute top-[430px] left-10 gap-2 border rounded-lg p-1">
                <button className="p-1 text-white hover:bg-background3 hover:text-background1 rounded-md">xxxxxxx</button>
                <button className="p-1 text-white hover:bg-background3 hover:text-background1 rounded-md">xxxxx</button>
                <button className="p-1 text-white hover:bg-background3 hover:text-background1 rounded-md">xxxxx xxxxx</button>
                <button className="p-1 text-white hover:bg-background3 hover:text-background1 rounded-md">xxxxx</button>
                <button className="p-1 text-white hover:bg-background3 hover:text-background1 rounded-md">xxxxxxx</button>
            </div>

            <div className="flex md:hidden absolute top-[480px] left-8">
                <IoMenu size={50} color="#FFFFFF" />
            </div>

            <div className="flex flex-col justify-center items-center -mt-4">
                <div className="text-background3 text-5xl font-medium text-center">
                    Build Tour Brand
                </div>
                <div className="text-background3 text-xl font-medium text-center mt-4">
                    ahsvhasbdchsbhksbsabbssbsjbcs
                </div>
                <div className="text-background3 text-xl font-medium text-center">
                    hsvdhsvhsavhvsahvdhsavchsavhsavhsavsa
                </div>

                <div className="mt-4">
                    <button className="flex items-center justify-center gap-2 bg-background3 text-background1 w-24 p-1 rounded-full hover:scale-110">
                        start
                        <FaAngleRight />
                    </button>
                </div>

                <div className="flex absolute gap-4 right-14 sm:right-14 bottom-5 sm:bottom-10">

                    <button className="border rounded-full p-2 hover:scale-110">
                        <BsFacebook size={25} color="#FFFFFF"/>
                    </button>

                    <button className="border rounded-full p-2 hover:scale-110">
                        <RiInstagramFill size={25} color="#FFFFFF"/>
                    </button>

                    <button className="border rounded-full p-2 hover:scale-110">
                        <FaYoutube size={25} color="#FFFFFF"/>
                    </button>

                    <button className="border rounded-full p-2 hover:scale-110">
                        <FaSquareXTwitter size={25} color="#FFFFFF"/>
                    </button>

                    <button className="border rounded-full p-2 hover:scale-110">
                        <IoLogoLinkedin size={25} color="#FFFFFF"/>
                    </button>
                </div>

                <div className="hidden sm:flex gap-2 border rounded-full p-2 hover:scale-105 w-54 text-background3 absolute bottom-10 left-12">
                    <IoLogoWhatsapp size={25} color="#FFFFFF" /> +55 (99) 99999-9999
                </div>
                <div className="sm:hidden flex gap-2 border rounded-full p-2 hover:scale-110 w-54 text-background3 absolute bottom-5 left-10">
                    <IoLogoWhatsapp size={25} color="#FFFFFF" />
                </div>

            </div>
        </header>
    );
}
