import localFont from 'next/font/local'
import Card, { ScreenSize } from '@/components/Card'
import AboutCard from '@/components/cards/About'
import ResumeCard from '@/components/cards/Resume'
import SchoolCard from '@/components/cards/School'
import { GitHubCard, MessengerCard, TwitterCard, YoutubeCard } from '@/components/cards/Social'
import classNames from 'classnames'
import WorkExperienceCard from '@/components/cards/WorkExperience'
import React from 'react'
import TILCard, { TILCardProps } from '@/components/cards/TIL'
import ShowcaseCard, { ShowcaseCardProps } from '@/components/cards/Showcase'

const switzer = localFont({src: './fonts/switzer.ttf'})

type HomeProps = {
  til_card_props: TILCardProps,
  showcase_card_props: ShowcaseCardProps,
}

export default function Home() {
  let props: HomeProps = {
    til_card_props: { text: 'Using firebase as cms for website', date: '2023-03-28' },
    showcase_card_props: {
      url: 'https://firebasestorage.googleapis.com/v0/b/padamchopra-me.appspot.com/o/IMG_1389.jpeg?alt=media&token=cc152eee-5746-435a-9fc3-a3c230ef85d6',
      caption: 'Art Gallery Ontario'
    }
  }
  const cards = [
    AboutCard,
    ResumeCard,
    SchoolCard,
    YoutubeCard,
    TwitterCard,
    MessengerCard,
    GitHubCard,
    WorkExperienceCard,
    TILCard(props.til_card_props),
    ShowcaseCard(props.showcase_card_props),
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

// export async function getServerSideProps() {
//   let home_props: HomeProps = {
//     til_card_props: { text: 'Using firebase as cms for website', date: '2023-03-28' },
//     showcase_card_props: {
//       url: 'https://firebasestorage.googleapis.com/v0/b/padamchopra-me.appspot.com/o/IMG_1389.jpeg?alt=media&token=cc152eee-5746-435a-9fc3-a3c230ef85d6',
//       caption: 'Art Gallery Ontario'
//     }
//   }
//   // try {
//   //   const res = await fetch('https://firestore.googleapis.com/v1/projects/padamchopra-me/databases/(default)/documents/website/home')
//   //   const data = await res.json()
//   //   const fields = data["fields"]
//   //   home_props = {
//   //     til_card_props: {
//   //       text: fields["til_text"]["stringValue"],
//   //       date: fields["til_update"]["timestampValue"].split('T')[0],
//   //     },
//   //     showcase_card_props: {
//   //       url: fields["showcase_url"]["stringValue"],
//   //       caption: fields["showcase_caption"]["stringValue"],
//   //     }
//   //   }
//   //   console.log(home_props)
//   // } catch (err) {
//   //   const date = 'unknown'
//   //   const error_fetching = 'Error fetching ¯\_(ツ)_/¯'
//   //   home_props = {
//   //     til_card_props: {
//   //       text: error_fetching,
//   //       date: date,
//   //     },
//   //     showcase_card_props: {
//   //       url: "",
//   //       caption: error_fetching,
//   //     }
//   //   }
//   // }

//   return {
//     props: home_props
//   }
// }
