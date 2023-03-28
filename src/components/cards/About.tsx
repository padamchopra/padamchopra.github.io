import Image from "next/image";
import { CardProps, CardSize } from "@/components/Card";

const AboutCard: CardProps = {
    card_size: CardSize.Large,
    Child: () => {
        return (
            <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start items-center">
                <Image src="/padam_chopra_side.jpeg" alt="Padam Chopra" className="h-28 w-28 rounded-full flex-shrink-0" width={2586} height={2586} />
                <div className="sm:ml-6 mt-2">
                    <div className="text-xl">Hi, I&apos;m Padam 👋🏼</div>
                    <div className="mt-1">
                        <span className="opacity-medium">
                            Building digital experiences, specializing in Android, Flutter, and React. <br/>Currently building&nbsp;
                        </span>
                        <a href="https://padamchopra.me" target="_blank" className="underline opacity-medium hover:opacity-100">padamchopra.me</a>
                    </div>
                </div>
            </div>
        )
    }
};

export default AboutCard;
