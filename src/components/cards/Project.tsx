import { CardProps, CardSize } from "../Card"

type ProjectCardProps = {
    name: string,
    tech: string,
    caption?: string,
}

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex text-black">
                <h4 className="bg-white w-fit px-2 py-1 rounded text-sm">
                    Project
                </h4>
                <h4 className="bg-white w-fit px-2 py-1 rounded text-sm ml-1">
                    {props.tech}
                </h4>
            </div>
            <div className="leading-5 mt-2">
                <div className="text-lg underline underline-offset-4">{props.name}</div>
                {props.caption && <span className="text-sm opacity-70">{props.caption}</span>}
            </div>
        </div>
    )
}

export const HabitusProjectCard: CardProps = {
    parent_classes: "bg-gradient-to-b from-red-400 to-red-600 text-white",
    card_size: CardSize.Medium,
    card_link: "https://www.youtube.com/watch?v=WC_CHbA3rZ8",
    Child: () => {
        return ProjectCard({ 
            name: "Habitus", 
            tech: "Flutter", 
            caption: "Build and track habits in 21 days. Crowdsource habits from the community.",
        })
    }
}

export const VMProjectCard: CardProps = {
    parent_classes: "bg-gradient-to-b from-gray-600 to-gray-800 text-white",
    card_size: CardSize.Square,
    card_link: "https://github.com/padamchopra/vm",
    Child: () => {
        return ProjectCard({
            name: "VM", 
            tech: "C++",
            caption: "Custom vim with commands + macros.",
        })
    }
}

export const PractikalityProjectCard: CardProps = {
    parent_classes: "bg-gradient-to-b from-blue-400 to-blue-600 text-white",
    card_size: CardSize.Medium,
    card_link: "https://www.youtube.com/watch?v=VhdyqzMQOGE",
    Child: () => {
        return ProjectCard({
            name: "Practikality",
            tech: "Android",
            caption: "A three-tier app to assist the mute, deaf, and visually impaired.",
        })
    }
}

export const BibliotecaProjectCard: CardProps = {
    parent_classes: "bg-gradient-to-b from-emerald-400 to-emerald-600 text-white",
    card_size: CardSize.Medium,
    card_link: "https://github.com/padamchopra/Biblioteca",
    Child: () => {
        return ProjectCard({
            name: "Biblioteca",
            tech: "Android (Compose)",
            caption: "Add-on package to show your library of compose components.",
        })
    }
}
