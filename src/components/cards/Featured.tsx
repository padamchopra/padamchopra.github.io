import { CardProps, CardSize } from "../Card"

type FeaturedCardProps = {
    link: string,
    name: string,
    tag_bg?: string,
    caption?: string,
}

const FeaturedCard = (props: FeaturedCardProps): CardProps => {
    return {
        card_size: CardSize.Square,
        Child: () => {
            const tag_bg = props.tag_bg ?? ''
            const tag_txt = props.tag_bg ? 'text-white' : 'text-black'
            return (
                <a href={props.link} target="_blank">
                    <div className="flex flex-col justify-between h-full">
                        <h4 className={`w-fit px-2 py-1 rounded text-sm border ${tag_bg} ${tag_txt}`}>
                            Featured
                        </h4>
                        <div className="leading-5 mt-2">
                            <div className="text-lg">{props.name}</div>
                            {props.caption && <span className="text-sm opacity-70">{props.caption}</span>}
                        </div>
                    </div>
                </a>
            )
        }
    }
}


export const AlgorandFeatureCard = FeaturedCard({
    link: "https://medium.com/algorand/building-on-algorand-deltahack-hackathon-recap-and-code-7849e21e3bb2",
    name: "Algorand",
    tag_bg: "bg-black",
    caption: "Paysy"
})

export const MicrosoftFeatureCard = FeaturedCard({
    link: "https://news.microsoft.com/en-in/ai-solutions-dominate-the-16th-edition-of-microsoft-imagine-cup-india-finals/",
    name: "Microsoft",
    tag_bg: "bg-blue-500",
    caption: "Practikality"
})

export const ImagineCupFeatureCard = FeaturedCard({
    link: "https://www.youtube.com/watch?v=WNtP97quERA",
    name: "Imagine Cup",
    tag_bg: "bg-purple-500",
    caption: "India Runner up"
})

export const YourStoryFeatureCard = FeaturedCard({
    link: "https://yourstory.com/2019/01/students-app-deaf-blind-mute-communicate",
    name: "YourStory",
    tag_bg: "bg-red-500",
    caption: "Practikality"
})

export const DigitMagazineFeatureCard = FeaturedCard({
    link: "https://www.youtube.com/watch?v=rXUREJo5OXo",
    name: "Digit",
    tag_bg: "bg-red-500",
    caption: "Imagine Cup"
})

export const IeltsFeatureCard = FeaturedCard({
    link: "https://www.youtube.com/watch?v=Ujp-Q4G3Uq0",
    name: "IELTS India",
    tag_bg: "bg-red-800",
    caption: "8.5 band"
})
