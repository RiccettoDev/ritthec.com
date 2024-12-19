
interface CardAboutProps {
    title: string;
    text: string;
}

export default function CardAbout({ title, text }: CardAboutProps) {

    return (
        <div className="w-full flex flex-col text-white gap-4">
            <h1 className="text-2xl font-extrabold">{title}</h1>
            <h4 className="font-sans">{text}</h4>
        </div>
    )
}