import IconHolder from "@/components/IconHolder";
import Image from "next/image";
import { CardProps } from "../Card";

const SocialCard = (link: string, img: string, text: string, icon_classes?: string, caption?: string) => {
    return (
        <a href={link} target="_blank">
            <div className="flex flex-col justify-between h-full">
                <IconHolder parent_classes={icon_classes ?? ''}>
                    <Image src={img} alt={text} className="h-full w-auto" width={128} height={128} />
                </IconHolder>
                <div className="leading-5 mt-2">
                    <div>{text}</div>
                    {caption && <span className="text-sm opacity-medium">{caption}</span>}
                </div>
            </div>
        </a>
    )
}

const YoutubeCard: CardProps = {
    parent_classes: "bg-red-50 hover:bg-red-100",
    Child: () => {
        return SocialCard("https://www.youtube.com/channel/UC-SlnBRXfvPWiEa3rlhPNsw", "/social/youtube.png", "YouTube")
    }
}

const TwitterCard: CardProps = {
    parent_classes: "bg-blue-50 hover:bg-blue-100",
    Child: () => {
        return SocialCard("https://twitter.com/PadamChopra_", "/social/twitter.png", "Twitter", undefined, "PadamChopra_")
    }
}

const MessengerCard: CardProps = {
    parent_classes: "bg-purple-50 hover:bg-purple-100",
    Child: () => {
        return SocialCard("https://m.me/chopra.padam", "/social/messenger.png", "Messenger")
    }
}

const GitHubCard: CardProps = {
    parent_classes: "bg-black text-white",
    Child: () => {
        return SocialCard("https://github.com/padamchopra", "/social/github.png", "GitHub", "p-1 border-0", "padamchopra")
    }
}

export {YoutubeCard, TwitterCard, MessengerCard, GitHubCard};
