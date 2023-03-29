import { faFile, faLocationDot, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardProps } from "../Card";
import IconHolder from "../IconHolder";

type IconWithTextCardProps = {
    icon: IconDefinition,
    link: string,
    text: string,
    caption?: string,
}

const IconWithTextCard = (props: IconWithTextCardProps) => {
    return (
        <a href={props.link} target="_blank">
            <div className="flex flex-col justify-between h-full">
                <IconHolder>
                    <FontAwesomeIcon icon={props.icon} />
                </IconHolder>
                <div className="mt-2 leading-5">
                    <div>{props.text}</div>
                    <span className="text-sm opacity-medium">{props.caption ?? ''}</span>
                </div>
            </div>
        </a>
    )
};

export const ResumeCard: CardProps = {
    Child: () => {
        return IconWithTextCard({
            icon: faFile,
            link: "/resume.pdf",
            text: "My Resume",
        })
    },
}

export const LocatedInCard: CardProps = {
    Child: () => {
        return IconWithTextCard({
            icon: faLocationDot,
            link: "https://goo.gl/maps/zgq64R5PgjekiiQGA",
            text: "Located In",
            caption: "Waterloo, ON",
        })
    }
}
