import { useEffect, useRef, useState } from "react";
import { CardHeight, CardProps, CardSize } from "../Card";

export type ShowcaseCardProps = {
    url: string,
    caption: string,
}

type WindowSize ={
    width: number | undefined,
    height: number | undefined,
}

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    const [windowSize, setWindowSize] = useState<WindowSize>({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

const ShowcaseCard = (props: ShowcaseCardProps): CardProps => {
    return {
        apply_default_padding: false,
        card_size: CardSize.Medium,
        card_height: CardHeight.Two,
        Child: () => {
            const ref = useRef<HTMLDivElement>(null);
            const imgRef = useRef<HTMLImageElement>(null);
            const size = useWindowSize();

            useEffect(() => {
                if (ref.current && imgRef.current) {
                    imgRef.current.style.height = '0px';
                    // set img ref height as ref height unless ref height smaller than 100px
                    if (ref.current.clientHeight < 100) {
                        imgRef.current.style.height = `${imgRef.current.clientWidth}px`;
                    } else {
                        imgRef.current.style.height = `${ref.current.clientHeight}px`;
                    }
                }
            }, [size])

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
