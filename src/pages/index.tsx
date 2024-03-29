import localFont from 'next/font/local'
import Card, { ScreenSize } from '@/components/Card'
import AboutCard, { AboutCardProps } from '@/components/cards/About'
import { LocatedInCard, ResumeCard } from '@/components/cards/IconWithText'
import SchoolCard from '@/components/cards/School'
import { GitHubCard, MessengerCard, TwitterCard, YoutubeCard } from '@/components/cards/Social'
import classNames from 'classnames'
import { AwardsCard, WorkExperienceCard } from '@/components/cards/RowSelectable'
import React from 'react'
import TILCard, { TILCardProps } from '@/components/cards/TIL'
import ShowcaseCard, { ShowcaseCardProps } from '@/components/cards/Showcase'
import SongOfYearCard, { SongOfYearProps } from '@/components/cards/SongOfYear'
import { BibliotecaProjectCard, HabitusProjectCard, PractikalityProjectCard, VMProjectCard } from '@/components/cards/Project'
import { AlgorandFeatureCard, DigitMagazineFeatureCard, IeltsFeatureCard, ImagineCupFeatureCard, MicrosoftFeatureCard, YourStoryFeatureCard } from '@/components/cards/Featured'

const switzer = localFont({src: './fonts/switzer.ttf'})

type HomeProps = {
  about_card_props: AboutCardProps,
  til_card_props: TILCardProps,
  showcase_card_props: ShowcaseCardProps,
  song_of_year_props: SongOfYearProps,
}

export default function Home(props: HomeProps) {
  const cards = [
    AboutCard(props.about_card_props),
    ResumeCard,
    SchoolCard,
    TwitterCard,
    YoutubeCard,
    MessengerCard,
    GitHubCard,
    LocatedInCard,
    WorkExperienceCard,
    TILCard(props.til_card_props),
    ShowcaseCard(props.showcase_card_props),
    SongOfYearCard(props.song_of_year_props),
    HabitusProjectCard,
    VMProjectCard,
    PractikalityProjectCard,
    BibliotecaProjectCard,
    AwardsCard,
    AlgorandFeatureCard,
    IeltsFeatureCard,
    MicrosoftFeatureCard,
    ImagineCupFeatureCard,
    YourStoryFeatureCard,
    DigitMagazineFeatureCard
  ]

  let key = 0;
  let gridClasses = classNames(
    'grid gap-4 grid-flow-row-dense py-4 px-1 m-auto transition-all',
    'xs:w-[420px] sm:w-[640px] lg:w-[1024px] 2xl:w-[1536px]',
    'sm:px-4 sm:grid-rows-10',
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

export async function getStaticProps() {
  let home_props: HomeProps = {
    about_card_props: {
      building_name: 'padamchopra.me',
      building_link: 'https://padamchopra.me',
    },
    til_card_props: { text: 'Using firebase as cms for website', date: '2023-03-28', link: '#' },
    showcase_card_props: {
      url: 'https://firebasestorage.googleapis.com/v0/b/padamchopra-me.appspot.com/o/IMG_1389.jpeg?alt=media&token=cc152eee-5746-435a-9fc3-a3c230ef85d6',
      caption: 'Art Gallery Ontario'
    },
    song_of_year_props: {
      link: 'https://open.spotify.com/embed/track/2t0wwvR15fc3K1ey8OiOaN?utm_source=generator&theme=0'
    }
  }
  try {
    const res = await fetch('https://firestore.googleapis.com/v1/projects/padamchopra-me/databases/(default)/documents/website/home')
    const data = await res.json()
    const fields = data["fields"]
    home_props = {
      about_card_props: {
        building_name: fields["building_name"]["stringValue"],
        building_link: fields["building_link"]["stringValue"],
      },
      til_card_props: {
        text: fields["til_text"]["stringValue"],
        date: fields["til_update"]["timestampValue"].split('T')[0],
        link: fields["til_link"]["stringValue"],
      },
      showcase_card_props: {
        url: fields["showcase_url"]["stringValue"],
        caption: fields["showcase_caption"]["stringValue"],
      },
      song_of_year_props: {
        link: fields["song_of_year"]["stringValue"],
      },
    }
    console.log(home_props)
  } catch (err) {
    // default to what was initialized
  }

  return {
    props: home_props,
    revalidate: 86400, //seconds
  }
}
