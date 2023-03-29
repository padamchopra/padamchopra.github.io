import { useEffect, useRef, useState } from "react";
import { CardHeight, CardProps, CardSize } from "../Card";

export type ShowcaseCardProps = {
    url: string,
    caption: string,
}

const ShowcaseCard = (props: ShowcaseCardProps): CardProps => {
    return {
        apply_default_padding: false,
        card_size: CardSize.Medium,
        card_height: CardHeight.Two,
        Child: () => {
            const ref = useRef<HTMLDivElement>(null);
            const imgRef = useRef<HTMLImageElement>(null);

            useEffect(() => {
                if (ref.current && imgRef.current) {
                    // set img ref height as ref height
                    imgRef.current.style.height = `${ref.current.clientHeight}px`;
                }
            }, [])

            return (
                <div ref={ref} className={`h-full w-full relative`}>
                    <div className="w-full h-full">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={props.url} ref={imgRef} className="w-full h-0 object-cover" alt={props.caption} />
                    </div>
                    <h4 className="bg-white w-fit px-2 py-1 rounded text-sm bottom-3 left-3 absolute">
                        {props.caption}
                    </h4>
                </div>
            )
        }
    }  
};

export default ShowcaseCard;
