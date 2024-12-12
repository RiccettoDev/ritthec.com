import { BsFacebook } from "react-icons/bs";
import { FaAngleRight, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";
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

            <div className="">
                <Image src={logo} alt="image logo" width={250} />
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

                <div className="flex absolute gap-4 right-14 bottom-10">

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

                <div className="flex gap-2 border rounded-full p-2 hover:scale-110 w-54 text-background3 absolute bottom-10 left-12">
                    <IoLogoWhatsapp size={25} color="#FFFFFF" /> +55 (99) 99999-9999
                </div>

            </div>
        </header>
    );
}
