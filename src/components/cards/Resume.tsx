import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardProps } from "../Card";
import IconHolder from "../IconHolder";

const ResumeCard: CardProps = {
    Child: () => {
        return (
            <a href="/resume.pdf" target="_blank">
                <div className="flex flex-col justify-between h-full">
                    <IconHolder>
                        <FontAwesomeIcon icon={faFile} />
                    </IconHolder>
                    <span>My Resume</span>
                </div>
            </a>
        )
    }
};

export default ResumeCard;
