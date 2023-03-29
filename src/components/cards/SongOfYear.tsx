import { CardProps, CardSize } from "../Card";

export type SongOfYearProps = {
    link: string,
}

const SongOfYearCard = (props: SongOfYearProps): CardProps => {
    return {
        apply_default_padding: false,
        card_size: CardSize.Medium,
        Child: () => {
            return (
                <div className="h-full w-full bg-[#282828] flex items-center relative">
                    <iframe src={props.link} width="100%" height="152" frameBorder={0} allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <h4 className="bg-white text-[#282828] w-fit px-2 py-1 rounded text-sm top-3 left-3 absolute">
                        Current Favourite
                    </h4>
                </div>
            )
        }
    }  
};

export default SongOfYearCard;
