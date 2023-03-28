import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger, faMedium, faTwitter, faYoutube, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

class SocialLink {
    readonly icon: IconDefinition;
    readonly href: string;
    readonly color: string;
    readonly name: string;
    _hovering: boolean = false;

    constructor(name: string, icon: IconDefinition, href: string, color: string) {
        this.name = name;
        this.icon = icon;
        this.href = href;
        this.color = color;
    }

    setHovering(value: boolean) {
        this._hovering = value;
    }

    isHovering(): boolean {
        return this._hovering;
    }
}

const socialLinksInitial: Array<SocialLink> = [
    // TODO: add href for resume
    new SocialLink('Resume', faFile, '', 'hover:text-slate-800'),
    new SocialLink('YouTube', faYoutube, 'https://www.youtube.com/channel/UC-SlnBRXfvPWiEa3rlhPNsw', 'hover:text-red-600'),
    new SocialLink('Twitter', faTwitter, 'https://twitter.com/PadamChopra_', 'hover:text-blue-500'),
    new SocialLink('Messenger', faFacebookMessenger, 'https://m.me/chopra.padam', 'hover:text-purple-600'),
    new SocialLink('Medium', faMedium, 'https://medium.com/@padamchopra', 'hover:text-black')
]

export default function Header() {
    const [socialLinks, setSocialLinks] = useState(socialLinksInitial);
    return (
        <header className="w-full p-4 px-20">
            <text className="font-medium">
                padam.chopra@uwaterloo.ca
            </text>
            <div className="float-right font-light">
                {
                    socialLinks.map((link) => (
                        <a key={link.icon.iconName} href={link.href} className="mx-3 text-lg relative" target="_blank">
                            <FontAwesomeIcon icon={link.icon} className={`transition-colors ${link.color}`} 
                                onMouseEnter={() => {
                                    link.setHovering(true);
                                    setSocialLinks([...socialLinks]);
                                }} 
                                onMouseLeave={() => {
                                    link.setHovering(false);
                                    setSocialLinks([...socialLinks]);
                                }} />
                            <span className={`absolute top-full bg-gray-100 mt-1.5 p-1 rounded w-24 -left-10 text-sm text-center ${link.isHovering() ? 'visible' : 'invisible'}`}>{link.name}</span>
                        </a>
                    ))
                }
            </div>
        </header>
    )
}