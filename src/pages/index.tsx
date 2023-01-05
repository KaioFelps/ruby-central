import Head from 'next/head'
import { Inter } from '@next/font/google'
import { ChipsFlexRow, GroupCard, GroupChip, GroupColumn, GroupsContainer, GroupsFlexWrapper, Hero, MainContainer, RoomCard, RoomColumn, RoomInfos, RoomOwner, RoomsContainer, RoomsFlexWrapper } from '../styles/pages'
import { Summary } from '../components/Summary'

import quartopadrao from "../assets/quarto-padrao.png"
import Image from 'next/image'
import { GetStaticProps } from 'next'
import ErrorBoundary from '../components/ErrorBoundary'

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
  newGroups: newGroupsProps[];
  onlineUsers: number;
  hostedFurnis: number;
  badgesAmount: number;
}

export default function Home({ popularRooms = [], newGroups = [], badgesAmount = 0, hostedFurnis = 0, onlineUsers = 0 }: HomeProps) {
  return (
    <>
      <Head>
        <title>Ruby Center Api</title>
        <meta name="description" content="Encontre tudo sobre o Ruby Hotel, de emblemas e mobis à informações de usuários!" />
        <link rel='canonical' href='/' />
      </Head>
      <MainContainer>
        <Hero>
          <h1>Overview do Ruby Hotel</h1>
          <Summary badgesAmount={badgesAmount} hostedFurnis={hostedFurnis} onlineUsers={onlineUsers} />
        </Hero>

        <RoomsContainer>
          <h3>Quartos mais populares</h3>

          <RoomsFlexWrapper>
            <ErrorBoundary>
              {popularRooms.map((room: popularRoomType) => {

                return (
                  <RoomCard key={room.createdAt}>
                    <Image src={room.roomPic.includes("/default1.png") ? quartopadrao : `https://rubyhotel.city/${room.roomPic}`} alt={room.roomPic.includes("default1.png") ? "quarto não possui papel de fundo" : ""} title="Capa do quarto" width={110} height={110} />

                    <RoomColumn>
                      <RoomInfos>
                        <strong>{room.roomName}</strong>
                        <p>{room.visitors} {room.visitors === 1 ? "usuário" : "usuários"}</p>
                      </RoomInfos>

                      <RoomOwner>
                        <Image src={`https://imager.rubyhotel.city/?&figure=${room.ownerVisual}&direction=3&head_direction=3&gesture=sml&size=sm&headonly=1`} alt="quarto não possui papel de fundo" title={`Rosto do usuário ${room.owner}`} width={56} height={56} unoptimized={true} />
                        <span>{room.owner}</span>
                      </RoomOwner>
                    </RoomColumn>
                  </RoomCard>
                )
              })}
            </ErrorBoundary>
          </RoomsFlexWrapper>
        </RoomsContainer>

        <GroupsContainer>
          <h3>Últimos grupos</h3>

          <GroupsFlexWrapper>
            <ErrorBoundary>
              {newGroups.map(group => {
                return (
                  <GroupCard key={group.createdAt}>
                    <Image src={`https://rubyhotel.city/groups/badge/${group.groupPic}`} alt="" title="Emblema do grupo" width={64} height={64} />

                    <GroupColumn>
                      <strong>{group.groupName}</strong>

                      <ChipsFlexRow>
                        <GroupChip>{group.membersAmount === 1 ? `${group.membersAmount} membros` : `${group.membersAmount} membros`}</GroupChip>
                        <GroupChip>{group.owner}</GroupChip>
                        <GroupChip>{(new Date(group.createdAt * 1000)).toLocaleString("pt-br", {
                          month: "numeric",
                          day: "numeric",
                          year: "numeric",
                        })}</GroupChip>
                      </ChipsFlexRow>
                    </GroupColumn>
                  </GroupCard>
                )
              })}
            </ErrorBoundary>
          </GroupsFlexWrapper>
        </GroupsContainer>
      </MainContainer>
    </>
  )
}

export const getStaticProps:GetStaticProps = async () => {

  // get popular room datas
  const roomsRequest = await fetch("https://api.rubyhotel.city/api/rooms?paginationLimit=6&order=visitors", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": "Bearer " + process.env.API_BEARER_TOKEN
    }
  })
  const roomsResponse = await roomsRequest.json()
  const roomsData = await roomsResponse.response.data

  let popularRooms = roomsData.map((room: any) => {
    return {
      roomName: room.name,
      roomPic: room.thumbnail,
      visitors: room.visitors,
      owner: room.owner.name,
      ownerVisual: room.owner.figure,
      createdAt: room.created_at
    } as popularRoomType
  })

  if (roomsResponse.success !== true) {
    popularRooms = []
  }

  // get latest groups datas
  const groupsRequest = await fetch("https://api.rubyhotel.city/api/groups?paginationLimit=10", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": "Bearer " + process.env.API_BEARER_TOKEN,
    }
  })

  const groupsResponse = await groupsRequest.json()
  const groupsData = await groupsResponse.response.data

  let newGroups = groupsData.map((group: any) => {
    return {
      groupName: group.name,
      createdAt: group.created_at,
      groupPic: group.badge_code,
      membersAmount: group.members_count,
      owner: group.owner.name,
    } as newGroupsProps
  })

  if (groupsResponse.success !== true) {
    popularRooms = []
  }

  // statistics
  const statisticsRequest = await fetch("https://api.rubyhotel.city/api/ruby/statistics", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "authorization": "Bearer " + process.env.API_BEARER_TOKEN,
    }
  })

  const statisticsResponse = await statisticsRequest.json()
  const { onlines_count, furniture_count, badges_count } = statisticsResponse.response

  return {
    props: {
      popularRooms,
      newGroups,
      onlineUsers: onlines_count,
      hostedFurnis: furniture_count,
      badgesAmount: badges_count,
    },
    revalidate: 60 * 10 // 10 minutos
  }
}