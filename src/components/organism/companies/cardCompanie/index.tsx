import Image, { StaticImageData } from "next/image";

interface CardCompanieProps {
    img: StaticImageData | string;
}

export default function CardCompanie({ img }: CardCompanieProps) {
    return (
        <div className="
            flex 
            justify-center 
            items-center 
            w-[25%] 
            h-32 
            border 
            border-black 
            border-opacity-10 
            rounded-lg 
            bg-background4"
        >
            <Image src={img} alt="image companie" className="flex w-[90%] h-[90%] rounded-xl opacity-30" />
        </div>
    )
}