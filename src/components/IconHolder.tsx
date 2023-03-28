import classNames from "classnames";
import { ReactNode, useEffect, useRef } from "react"

type IconHolderProps = {
    parent_classes?: string;
    children: ReactNode;
}

export default function IconHolder(props: IconHolderProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            const height = ref.current.clientHeight;
            const width = ref.current.clientWidth;
            if (width < height) {
                ref.current.style.width = `${height}px`;
            }
        }
    });

    const holder_classes = classNames(
        props.parent_classes,
        'h-10 w-fit border shadow-none rounded-lg flex flex-col justify-center items-center overflow-hidden'
    )

    return (
        <div ref={ref} className={holder_classes}>
            {props.children}
        </div>
    )
}
