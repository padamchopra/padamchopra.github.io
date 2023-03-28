import classNames from "classnames";
import React, { useState } from "react";
import { CardHeight, CardProps, CardSize } from "../Card";

type WorkExperienceDesc = {
    key: string,
    theme: string,
    company: string,
    role: string,
    time: string,
    key_work: string,
    term_text: string,
}

const WorkExperienceCard: CardProps = {
    card_size: CardSize.Large,
    card_height: CardHeight.Two,
    apply_default_padding: false,
    Child: () => {
        const experiences: WorkExperienceDesc[] = [
            {
                key: "1pass",
                theme: "bg-blue-500",
                company: "1Password",
                role: "SWE Intern [Android]",
                time: "May — Aug 2022",
                key_work: "state management, flows & coroutines, and autofill service",
                term_text: "Spring 2022",
            },
            {
                key: "ritual-1",
                theme: "bg-sky-500",
                company: "Ritual.co",
                role: "Mobile Eng. Part-time [Android]",
                time: "Jan — Mar 2022",
                key_work: "shareable gift cards, and referral flow",
                term_text: "Winter 2022",
            },
            {
                key: "ritual-2",
                theme: "bg-sky-500",
                company: "Ritual.co",
                role: "Mobile Eng. Intern [Android]",
                time: "Sep — Dec 2021",
                key_work: "jetpack compose, and new sharable gift card feature",
                term_text: "Fall 2021",
            },
            {
                key: "ceridian-1",
                theme: "bg-purple-500",
                company: "Ceridian Dayforce",
                role: "NLP Intern",
                time: "Jan — Apr 2021",
                key_work: "entity recognition for non-english names and client-specific tokens",
                term_text: "Winter 2021",
            },
            {
                key: "ceridian-2",
                theme: "bg-purple-500",
                company: "Ceridian Dayforce",
                role: "SWE Intern [Android]",
                time: "May — Aug 2020",
                key_work: "paginated suggestions text field, and dynamic app shortcuts",
                term_text: "Spring 2021",
            }
        ]

        const [selectedExperienceShort, setSelectedExperienceShort] = useState<WorkExperienceDesc>(experiences[0])
        const [selectedExperience, setSelectedExperience] = useState<WorkExperienceDesc>(experiences[0])
        const [opacityOfSelected, setOpacityOfSelected] = useState<string>('opacity-100')

        const changeSelectedExperience = (experience: WorkExperienceDesc) => {
            setSelectedExperienceShort(experience)
            setOpacityOfSelected('opacity-0')
            setTimeout(() => {
                setSelectedExperience(experience)
            }, 150)
            setTimeout(() => {
                setOpacityOfSelected('opacity-100')
            }, 300)
        }

        return (
            <div className="flex flex-col justify-between h-full w-full">
                <div className={`w-full ${selectedExperience.theme} p-4 flex flex-col transition-colors duration-500`}>
                    <div className={`flex justify-between ${opacityOfSelected} transition-opacity duration-200`}>
                        <h4 className="bg-white w-fit px-2 py-1 rounded text-sm">
                            {selectedExperience.company}
                        </h4>
                        <h4 className="text-white opacity-medium rounded text-sm">
                            {selectedExperience.time}
                        </h4>
                    </div>
                    <div className={`mt-2 text-white flex-grow ${opacityOfSelected} transition-opacity duration-200`}>
                        {selectedExperience.role}
                        <p className="text-sm opacity-medium">
                            {selectedExperience.key_work}
                        </p>
                    </div>
                </div>
                <div className="h-full w-full pt-2">
                    <div className="text-sm mb-2 px-4">💼&nbsp;<span className="opacity-medium uppercase">Work experience</span></div>
                    <>
                        {experiences.map((experience) => {
                            const divClasses = classNames(
                                'w-full border-b border-t px-4 py-2 flex justify-between',
                                { 'bg-gray-100': experience.key == selectedExperienceShort.key },
                                { 'hover:bg-gray-50': experience.key != selectedExperienceShort.key }
                            )
                            return (
                                <div className={divClasses} key={experience.key} onClick={() => changeSelectedExperience(experience)}>
                                    <span>{experience.company}&nbsp;<span className="opacity-medium">— {experience.term_text}</span></span>
                                    {experience.key == selectedExperienceShort.key ? '👀' : ''}
                                </div>
                            )
                        })}
                    </>
                </div>
            </div>
        )
    }
}

export default WorkExperienceCard;
