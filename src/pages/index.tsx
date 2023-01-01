import Head from 'next/head'
import { Inter } from '@next/font/google'
import { ChipsFlexRow, GroupCard, GroupChip, GroupColumn, GroupsContainer, GroupsFlexWrapper, Hero, MainContainer, RoomCard, RoomColumn, RoomInfos, RoomOwner, RoomsContainer, RoomsFlexWrapper } from '../styles/pages'
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

type newGroupsProps = {
  groupName: string;
  groupPic: string;
  membersAmount: number;
  owner: string;
  createdAt: number;
}

type HomeProps = {
  popularRooms: popularRoomType[];
  newGroups: newGroupsProps[]
}

export default function Home({popularRooms, newGroups}: HomeProps) {
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

              return (
                <RoomCard key={room.createdAt}>
                  <Image src={room.roomPic.includes("/default1.png") ? quartopadrao : `https://rubyhotel.city/${room.roomPic}`} alt={room.roomPic.includes("default1.png") ? "quarto não possui papel de fundo" : ""} width={110} height={110} />

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

          <GroupsFlexWrapper>
            {newGroups.map(group => {
              return (
                <GroupCard key={group.createdAt}>
                  <Image src={`https://rubyhotel.city/groups/badge/${group.groupPic}`} alt="" width={64} height={64} />

                  <GroupColumn>
                    <strong>{group.groupName}</strong>

                    <ChipsFlexRow>
                      <GroupChip>{group.membersAmount === 1 ? `${group.membersAmount} membros` : `${group.membersAmount} membros`}</GroupChip>
                      <GroupChip>{group.owner}</GroupChip>
                      <GroupChip>{new Date(group.createdAt).toLocaleString("pt-br")}</GroupChip>
                    </ChipsFlexRow>
                  </GroupColumn>
                </GroupCard>
              )
            })}
          </GroupsFlexWrapper>
        </GroupsContainer>
      </MainContainer>
    </>
  )
}

export const getStaticProps:GetStaticProps = async () => {

  // get popular room datas
  const roomsRequest = await fetch("https://api.rubyhotel.city/api/rooms?paginationLimit=5&order=visitors", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": "Bearer " + process.env.API_BEARER_TOKEN
    }
  })
  const roomsResponse = await roomsRequest.json()
  const roomsData = await roomsResponse.response.data

  const popularRooms = roomsData.map((room: any) => {
    return {
      roomName: room.name,
      roomPic: room.thumbnail,
      visitors: room.visitors,
      owner: room.owner.name,
      ownerVisual: room.owner.figure,
      createdAt: room.created_at
    } as popularRoomType
  })


  // get latest groups datas
  const groupsRequest = await fetch("https://api.rubyhotel.city/api/groups?paginationLimit=5", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": "Bearer " + process.env.API_BEARER_TOKEN,
    }
  })

  const groupsResponse = await groupsRequest.json()
  const groupsData = await groupsResponse.response.data

  const newGroups = groupsData.map((group:any) => {
    return {
      groupName: group.name,
      createdAt: group.created_at,
      groupPic: group.badge_code,
      membersAmount: group.members_count,
      owner: group.owner.name,
    } as newGroupsProps
  })

  return {
    props: {
      popularRooms,
      newGroups,
    },
    revalidate: 60 * 10 // 10 minutos
  }
}