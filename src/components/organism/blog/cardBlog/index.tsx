import Image, { StaticImageData } from "next/image";

interface CardBlogProps {
    img: StaticImageData | string;
    text: string;
}

export default function CardBlog({ img, text }: CardBlogProps) {
    return (
        <div className="flex flex-col gap-10 w-[35%] h-[100%] pt-6 bg-background3 rounded-xl">
            <Image src={img} alt="image blog page" className="w-[90%]"/>
            <h3 className="text-center">{text}</h3>
        </div>
    )
}