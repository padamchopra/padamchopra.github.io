import { CardProps, CardSize } from "../Card";
import IconHolder from "../IconHolder";

const SchoolCard: CardProps = {
    card_size: CardSize.Medium,
    card_link: "https://uwaterloo.ca/",
    Child: () => {
        return (
            <div className="flex flex-col justify-between h-full">
                <IconHolder>
                    <img src="/uwaterloo.png" alt="University of Waterloo" className="h-full w-auto bg-black" />
                </IconHolder>
                <p className="whitespace-normal mt-2">
                    Computer Science <br/>
                    <span className="opacity-medium text-wrap text-sm">@University of Waterloo &lsquo;24</span>
                </p>
            </div>
        )
    }  
};

export default SchoolCard;
