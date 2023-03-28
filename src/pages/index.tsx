import localFont from 'next/font/local'
import Card, { ScreenSize } from '@/components/Card'
import AboutCard from '@/components/cards/About'
import ResumeCard from '@/components/cards/Resume'
import SchoolCard from '@/components/cards/School'
import { GitHubCard, MessengerCard, TwitterCard, YoutubeCard } from '@/components/cards/Social'
import classNames from 'classnames'
import WorkExperienceCard from '@/components/cards/WorkExperience'
import React from 'react'

const switzer = localFont({src: './fonts/switzer.ttf'})

export default function Home() {
  const cards = [
    AboutCard,
    ResumeCard,
    SchoolCard,
    YoutubeCard,
    TwitterCard,
    MessengerCard,
    GitHubCard,
    WorkExperienceCard,
  ]

  let key = 0;
  let gridClasses = classNames(
    'grid gap-4 grid-flow-row-dense py-4 px-1 m-auto transition-all',
    'xs:w-[420px] sm:w-[640px] lg:w-[1024px] 2xl:w-[1536px]',
    'sm:px-4 sm:grid-rows-4',
    ScreenSize.Default,
    ScreenSize.Small,
    ScreenSize.Large,
    ScreenSize.XXLarge,
  )

  return (
    <div className={switzer.className}>
      <div className={gridClasses}>
        {
          cards.map((card) => (
            <Card key={key++} {...card} />
          )
        )}
      </div>
    </div>
  )
}
