import Head from 'next/head'
import { Inter } from '@next/font/google'
import { GroupsContainer, Hero, MainContainer, RoomCard, RoomColumn, RoomInfos, RoomOwner, RoomsContainer, RoomsFlexWrapper } from '../styles/pages'
import { Summary } from './components/Summary'

import quartopadrao from "../assets/quarto-padrao.png"
import Image from 'next/image'
import { GetServerSideProps, GetStaticProps } from 'next'

const inter = Inter({ subsets: ['latin'] })

type popularRoomType = {
  roomName: string;
  roomPic: string;
  visitors: number;
  owner: string;
  ownerVisual: string;
  createdAt: number;
}

type HomeProps = {
  popularRooms: popularRoomType[]
}

export default function Home({popularRooms}: HomeProps) {
  return (
    <>
      <Head>
        <title>Ruby Center Api</title>
        <meta name="description" content="Encontre tudo sobre o Ruby Hotel, de emblemas e mobis à informações de usuários!" />
        <link rel='canonical' href='/' />
      </Head>
      <MainContainer>
        <Hero>
          <h1>Overview</h1>
          <Summary />
        </Hero>

        <RoomsContainer>
          <h2>Quartos mais populares</h2>

          <RoomsFlexWrapper>
            {popularRooms.map((room: popularRoomType) => {

            console.log(room.ownerVisual)
              return (
                <RoomCard key={room.createdAt}>
                  <Image src={room.roomPic.includes("/default1.png") ? quartopadrao : `https://rubyhotel.city/${room.roomPic}`} alt="quarto não possui papel de fundo" width={110} height={110} />

                  <RoomColumn>
                    <RoomInfos>
                      <strong>{room.roomName}</strong>
                      <p>{room.visitors} {room.visitors === 1 ? "usuário" : "usuários"}</p>
                    </RoomInfos>

                    <RoomOwner>
                      <Image src={`https://imager.rubyhotel.city/?&figure=${room.ownerVisual}&direction=3&head_direction=3&gesture=sml&size=sm&headonly=1`} alt="quarto não possui papel de fundo" width={56} height={56} unoptimized={true} />
                      <span>{room.owner}</span>
                    </RoomOwner>
                  </RoomColumn>
                </RoomCard>
              )
            })}
          </RoomsFlexWrapper>
        </RoomsContainer>

        <GroupsContainer>
          <h2>Últimos grupos</h2>
        </GroupsContainer>
      </MainContainer>
    </>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  const request = await fetch("https://api.rubyhotel.city/api/rooms?paginationLimit=5&order=visitors", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": "Bearer " + process.env.API_BEARER_TOKEN
    }
  })
  const response = await request.json()
  const data = await response.response.data

  const popularRooms = data.map((room: any) => {
    return {
      roomName: room.name,
      roomPic: room.thumbnail,
      visitors: room.visitors,
      owner: room.owner.name,
      ownerVisual: room.owner.figure,
      createdAt: room.created_at
    } as popularRoomType
  })

  return {
    props: {
      popularRooms,
    },
    revalidate: 60 * 10 // 5 minutos
  }
}