import { CardProps, CardSize } from "../Card";

export type TILCardProps = {
    text: string,
    date: string,
}

const TILCard = (props: TILCardProps): CardProps => {
    return {
        card_size: CardSize.Medium,
        Child: () => {
            return (
                <div className="flex flex-col justify-between h-full">
                    <h4 className="bg-amber-200 w-fit px-2 py-1 rounded text-sm">
                        TIL
                    </h4>
                    <p className="whitespace-normal mt-2 leading-5">
                        {props.text} <br/>
                        <span className="opacity-medium text-wrap text-sm">updated: {props.date}</span>
                    </p>
                </div>
            )
        }
    }  
};

export default TILCard;
