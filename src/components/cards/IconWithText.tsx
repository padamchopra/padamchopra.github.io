import { faFile, faLocationDot, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardProps } from "../Card";
import IconHolder from "../IconHolder";

type IconWithTextCardProps = {
    icon: IconDefinition,
    text: string,
    caption?: string,
}

const IconWithTextCard = (props: IconWithTextCardProps) => {
    return (
        <div className="flex flex-col justify-between h-full">
            <IconHolder>
                <FontAwesomeIcon icon={props.icon} />
            </IconHolder>
            <div className="mt-2 leading-5">
                <div>{props.text}</div>
                <span className="text-sm opacity-medium">{props.caption ?? ''}</span>
            </div>
        </div>
    )
};

export const ResumeCard: CardProps = {
    card_link: "/resume.pdf",
    Child: () => {
        return IconWithTextCard({
            icon: faFile,
            text: "My Resume",
        })
    },
}

export const LocatedInCard: CardProps = {
    card_link: "https://goo.gl/maps/zgq64R5PgjekiiQGA",
    Child: () => {
        return IconWithTextCard({
            icon: faLocationDot,
            text: "Located In",
            caption: "Waterloo, ON",
        })
    }
}
