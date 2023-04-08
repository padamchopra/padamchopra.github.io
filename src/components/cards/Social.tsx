import IconHolder from "@/components/IconHolder";
import Image from "next/image";
import { CardProps } from "../Card";

const SocialCard = (img: string, text: string, icon_classes?: string, caption?: string) => {
    return (
        <div className="flex flex-col justify-between h-full">
            <IconHolder parent_classes={icon_classes ?? ''}>
                <Image src={img} alt={text} className="h-full w-auto" width={128} height={128} />
            </IconHolder>
            <div className="leading-5 mt-2">
                <div>{text}</div>
                {caption && <span className="text-sm opacity-medium">{caption}</span>}
            </div>
        </div>
    )
}

const YoutubeCard: CardProps = {
    parent_classes: "bg-red-50 hover:bg-red-100",
    card_link: "https://www.youtube.com/channel/UC-SlnBRXfvPWiEa3rlhPNsw",
    Child: () => {
        return SocialCard("/social/youtube.png", "YouTube")
    }
}

const TwitterCard: CardProps = {
    parent_classes: "bg-blue-50 hover:bg-blue-100",
    card_link: "https://twitter.com/PadamChopra_",
    Child: () => {
        return SocialCard("/social/twitter.png", "Twitter", undefined, "PadamChopra_")
    }
}

const MessengerCard: CardProps = {
    parent_classes: "bg-purple-50 hover:bg-purple-100",
    card_link: "https://m.me/chopra.padam",
    Child: () => {
        return SocialCard("/social/messenger.png", "Messenger")
    }
}

const GitHubCard: CardProps = {
    parent_classes: "bg-black text-white",
    card_link: "https://github.com/padamchopra",
    Child: () => {
        return SocialCard("/social/github.png", "GitHub", "p-1 border-0", "padamchopra")
    }
}

export {YoutubeCard, TwitterCard, MessengerCard, GitHubCard};
