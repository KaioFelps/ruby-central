import { GetServerSideProps } from "next"
import Head from "next/head"
import Image from "next/image";
import { useRouter } from "next/router";
import { Binoculars, CaretLeft, CaretRight } from "phosphor-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import NavLink from "../../components/NavLink";
import { api } from "../../lib/api";
import { NothingFoundWarning } from "../../styles/pages/emblemas";
import { BadgeContainer, BadgeHeader, BadgeInfos, BadgeMainContainer, QueryForm, UserCard, UserColumn, UsersContainer, UsersHeader } from "../../styles/pages/emblemaUnico";
import { StyledButton, StyledButtonGroup, StyledLabel } from "../../styles/styledComponents";

type UserPropsType = {
    name: string;
    figure: string;
}

type BadgesInfosPropsType = {
    title: string;
    desc: string;
    code: string;
    users: UserPropsType[];
    currentPage: number;
    lastPage: number;
    perPage: number;
    error?: boolean;
    errorMessage?: boolean;
}

export default function Emblema({error, code: BadgeCode = "", currentPage = 1, desc: BadgeDesc, lastPage = 1, perPage, title: BadgeTitle, users}: BadgesInfosPropsType) {
    const META_TITLE = `Emblema: ${BadgeCode} • Ruby Info Api`
    const META_DESC = `Cheque quem possui o emblema ${BadgeCode} no Ruby Hotel, um Habbo Pirata`
    const META_CANONICAL = `https://ruby-central.vercel.app/emblemas/${BadgeCode}`

    const [ isSearching, setIsSearching ] = useState(false)
    const [ isChangingPage, setIsChangingPage ] = useState(false)
    const { push, events } = useRouter()

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        events.on("routeChangeComplete", () => {
            setIsSearching(false)
            setIsChangingPage(false)
        })
    }, [events])

    const paginationControllers = {
        prev() {
            setIsChangingPage(true)
            if(currentPage <= 1) {
                push({
                    pathname: `/emblemas/${BadgeCode}`,
                    query: {
                        page: lastPage,
                    }
                })
            }
            else {
                push({
                    pathname: `/emblemas/${BadgeCode}`,
                    query: {
                        page: (currentPage - 1),
                    }
                })
            }
        },
        next() {
            setIsChangingPage(true)
            if(currentPage >= lastPage) {
                push({
                    pathname: `/emblemas/${BadgeCode}`,
                    query: {
                        page: 1,
                    }
                })
            }
            else {
                push({
                    pathname: `/emblemas/${BadgeCode}`,
                    query: {
                        page: (currentPage + 1),
                    }
                })
            }
        }
    }

    function handleChangeBadge(e: FormEvent) {
        e.preventDefault()

        if (inputRef.current!.value.trim() === "" && inputRef.current!.value.trim().length === 0) {
            alert("Você não digitou nenhum código! 😤")
            inputRef.current!.value = ""
            return;
        }
        else if(inputRef.current!.value.trim().toLowerCase() === BadgeCode.toLowerCase()) {
            alert("Você já está neste emblema, bobinho. 🙅‍♂️")
            inputRef.current!.value = ""
            return;
        }

        setIsSearching(true)
        push(`/emblemas/${inputRef.current!.value.trim()}`)
        inputRef.current!.value = ""
    }

    return (
        <>
            <Head>
                <title>{META_TITLE}</title>
                <link rel='canonical' href={META_CANONICAL} />
                <meta name="theme-color" content="#0080ff" />

                <meta property="og:title" content={META_TITLE} />
                <meta name="twitter:title" content={META_TITLE} />

                <meta name="description" content={META_DESC} />
                <meta property="og:description" content={META_DESC} />
                <meta name="twitter:description" content={META_DESC} />

                <meta property="og:type" content="fan-site" />
                <meta property="og:url" content={META_CANONICAL} />
                <meta property="og:image" content="/facebook-emblemas.png" />
                <meta property="og:site_name" content="Ruby Center" />

                {/* twitter card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:image" content="/twitter-emblemas.png" />
            </Head>
            <BadgeMainContainer>
                <BadgeHeader>
                    <h1>Quem tem o emblema</h1>

                    <QueryForm onSubmit={handleChangeBadge}>
                        <StyledLabel css={{"$$width": "320px"}}>
                            <Binoculars size={24} weight="light" />
                            <input ref={inputRef} type="text" name="query" id="query" placeholder="Digite o código de um emblema"/>
                        </StyledLabel>
                        <StyledButton
                            aria-label="Realizar busca de quem possui o emblema."
                            type="submit"
                            focusRipple
                            disabled={isSearching}
                        >
                            Buscar
                        </StyledButton>
                    </QueryForm>
                </BadgeHeader>

                {!!error ?
                    <NothingFoundWarning>
                        O emblema não foi encontrado ou não existe...
                    </NothingFoundWarning>
                    :
                    <>
                    <BadgeContainer>
                        <Image src={`https://rubyhotel.city/apifiles/badges/${BadgeCode}`} alt="" width={40} height={40} />

                        <BadgeInfos>
                            <p><strong>Título:</strong> {BadgeTitle}</p>
                            <p><strong>Descrição:</strong> {BadgeDesc}</p>
                            <p><strong>Código:</strong> {BadgeCode}</p>
                        </BadgeInfos>
                    </BadgeContainer>

                    <UsersHeader>
                            <h2>Usuários</h2>

                            <StyledButtonGroup>

                                <StyledButton
                                    aria-label="ir para a página anterior de usuários que possuem o emblema atual"
                                    title="Página anterior"
                                    focusRipple
                                    onClick={paginationControllers.prev}
                                    disabled={isChangingPage || currentPage === 1}
                                >
                                    <CaretLeft weight="bold" size={16} color="white" />
                                </StyledButton>

                                <StyledButton
                                    aria-label="ir para a próxima página de usuários que possuem o emblema atual"
                                    title="Próxima página"
                                    focusRipple
                                    onClick={paginationControllers.next}
                                    disabled={isChangingPage || currentPage === lastPage}
                                >
                                    <CaretRight weight="bold" size={16} color="white" />
                                </StyledButton>

                            </StyledButtonGroup>
                    </UsersHeader>

                    <UsersContainer>
                        {users.map(user => (
                            <UserCard key={user.name}>
                                <Image src={`https://imager.rubyhotel.city/?&figure=${user.figure}&direction=3&head_direction=3&size=sm&headonly=1`} alt="" width={64} height={110} />
                                <UserColumn>
                                    <strong>{user.name}</strong>
                                    <NavLink href={"/"}>Ver perfil</NavLink>
                                </UserColumn>
                            </UserCard>
                        ))}
                    </UsersContainer>
                    </>
                }
            </BadgeMainContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps<any, {code: string;}> = async ({params, query}) => {
    if(!params!.code) {
        return {
            props: {
                error: true,
                errorMessage: "No badge code provided.",
            }
        }
    }

    const page = !!query.page ? query.page : 1

    const code = params!.code
    const request = await api.get(`badge/${code}`, {
        headers: {
            "Content-Type": "Application/json",
            "Authorization": "Bearer " + process.env.API_BEARER_TOKEN,
        },
        params: {
            paginationLimit: 20,
            page,
        }
    })

    const status = await request.data
    const data = await request.data.response

    if(!!status.message || status.httpCode !== 200) {
        return {
            props: {
                error: true,
                errorMessage: "Something went wrong during data fetch.",
            }
        }
    }

    const usersArray = data.users[0].data.map(({user}: {user: UserPropsType}) => {
            return {
                name: user.name,
                figure: user.figure
            }
        }) as UserPropsType[]
    
    return {
        props: {
            code: data.badgeData.code,
            title: data.badgeData.title,
            desc: data.badgeData.description,
            users: usersArray,
            currentPage: data.users[0].current_page,
            lastPage: data.users[0].last_page,
            perPage: data.users[0].per_page,
        } as BadgesInfosPropsType
    }
}
