import classNames from "classnames";
import React, { ReactNode} from "react"

export enum ScreenSize {
    Default = 'grid-cols-2',
    Small = 'sm:grid-cols-3',
    Large = 'lg:grid-cols-6',
    XXLarge = '2xl:grid-cols-9',
}

export enum CardSize {
    Square = 'col-span-1',
    Medium = 'col-span-2',
    Large = 'col-span-3',
}

export enum CardHeight {
    Default = 'row-span-1',
    Two = 'row-span-2'
}

export type CardProps = {
    parent_classes?: string,
    apply_default_padding?: boolean,
    card_size?: CardSize,
    card_height?: CardHeight,
    Child: () => JSX.Element,
}

export default function Card(props: CardProps) {
    const card_size = props.card_size ?? CardSize.Square;
    const card_height = props.card_height ?? CardHeight.Default;

    let card_classes = classNames(
        {'p-4': props.apply_default_padding ?? true},
        props.parent_classes,
        // {'sm:max-h-[10rem]': card_height == CardHeight.Default},
        // {'sm:max-h-[20rem]': card_height == CardHeight.Two},
        'flex items-stretch rounded-xl border shadow-none hover:shadow transition-all overflow-hidden',
        card_height,
        {[card_size]: card_size != CardSize.Large},
        {[CardSize.Medium]: card_size == CardSize.Large},
        {'sm:col-span-3': card_size == CardSize.Large},
    )

    return (
        <article className={card_classes}>
            {/* dark:bg-neutral-900 dark:border-neutral-800 dark:hover:shadow-neutral-900 */}
            <props.Child />
        </article>
    )
}
