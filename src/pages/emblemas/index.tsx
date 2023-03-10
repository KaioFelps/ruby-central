import { Binoculars, CaretLeft, CaretRight } from "phosphor-react";
import { Badge, BadgeLink, BadgeParagraph, BadgesContainer, BadgesFooter, BadgesHeader, BadgeToolTipTrigger, Form, MainContainer, NothingFoundWarning, ResultWrapper } from "../../styles/pages/emblemas";
import { StyledButton, StyledLabel } from "../../styles/styledComponents";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { PaginationArrows, PaginationContainer, PaginationDivisor, PaginationLink, PaginationLinkWrapper } from "../../styles/components/pagination";
import Tooltip from "../../components/Tooltip";
import Head from "next/head";

type BadgeType = {
    title: string;
    description: string;
    code: string;
}

type EmblemasProps = {
    badges: BadgeType[];
    total: number;
    currentPage: number;
    totalPages: number;
}

export default function Emblemas({badges = [], currentPage, total, totalPages}: EmblemasProps) {
    const { query, push, events } = useRouter()
    const changePagePath = !!query.query ? `/emblemas?query=${query.query}&page=` : "/emblemas?page="
    const inputRef = useRef<HTMLInputElement>(null)
    const [ isSearching, setIsSearching ] = useState(false)
    const [ isChangingPage, setIsChangingPage ] = useState(false)
   
    const getTotalBadges = useCallback(() => {
        let initNum = badges.length
        
        if (currentPage === 1) {
            return badges.length
        }
        
        for (let i = 0; i <= (currentPage - 2); i++) {
            initNum = initNum + 30
        }
        return initNum
    }, [badges, currentPage])

    const badgesAmountFromTotal = getTotalBadges()

    function handleFormSubmit(e:ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        const inputQuery = inputRef.current!.value
        
        if (inputQuery === query.query || (!query.query && inputQuery === "")) {
            alert("Voc?? j?? se enconstra nessa pesquisa.")
        } else {
            setIsSearching(true)
            inputQuery === "" ? push("") : push(`/emblemas?query=${inputQuery}`)
        }
    }

    const calcVisiblePaginationButtons = useCallback(() => {
        const visibleButtons = 5
        let maxLeft = (currentPage - Math.floor(visibleButtons / 2))
        let maxRight = (currentPage + Math.floor(visibleButtons / 2))
        let isFirstPageVisible = false
        let isLastPageVisible = false

        if (maxLeft <= 1) {
            maxLeft = 1
            maxRight = visibleButtons
        }
        
        if (maxRight >= totalPages) {
            maxLeft = totalPages - (visibleButtons - 1)
            maxRight = totalPages
        }

        if (totalPages < visibleButtons + 1) {
            maxLeft = 1
            maxRight = totalPages
        }
        
        if (maxLeft <= 1) isFirstPageVisible = true
        if (maxRight === totalPages) isLastPageVisible = true

        return {
            maxLeft,
            maxRight,
            isFirstPageVisible,
            isLastPageVisible,
        }
    }, [currentPage, totalPages])

    const { isFirstPageVisible, isLastPageVisible, maxLeft, maxRight } = calcVisiblePaginationButtons()

    const paginationControls = {
        prev() {
            setIsChangingPage(true)
            if(currentPage <= 1) {
                // push(`${changePagePath}1`)
                push({
                    pathname: "/emblemas",
                    query: {
                        query: query.query || null,
                        page: 1,
                    }
                })
            }
            
            // push(`${changePagePath}${currentPage - 1}`)
            push({
                pathname: "/emblemas",
                query: {
                    query: query.query || null,
                    page: (currentPage - 1),
                }
            })
        },

        next() {
            setIsChangingPage(true)
            if(currentPage === totalPages) {
                // push(`${changePagePath}${currentPage + 1}`)
                push({
                    pathname: "/emblemas",
                    query: {
                        query: query.query || null,
                        page: 1,
                    }
                })
            }

            // push(`${changePagePath}${currentPage + 1}`)
            push({
                pathname: "/emblemas",
                query: {
                    query: query.query || null,
                    page: (currentPage + 1),
                }
            })
        }
    }

    const generatePaginationButtons = useCallback(() => {
        let calculatedPages = []
        for (let page = maxLeft; page <= maxRight ; ++page) {
            calculatedPages.push(page)
        }

        return { calculatedPages }
    }, [maxLeft, maxRight])

    const { calculatedPages } = generatePaginationButtons()

    // change button disable prop according to page being loading or not
    useEffect(() => {
        events.on("routeChangeComplete", () => {
            setIsSearching(false)
            setIsChangingPage(false)
        })
    }, [events])

    return (
        <>
            <Head>
                <title>Scanner de emblemas ??? Ruby Center Api</title>
                <link rel='canonical' href='https://ruby-central.vercel.app/emblemas' />
                <meta name="theme-color" content="#0080ff" />

                <meta property="og:title" content="Scanner de emblemas ??? Ruby Center Api" />
                <meta name="twitter:title" content="Scanner de emblemas ??? Ruby Center Api" />

                <meta name="description" content="Confira todos os emblemas hospedados no Ruby Hotel." />
                <meta property="og:description" content="Confira todos os emblemas hospedados no Ruby Hotel." />
                <meta name="twitter:description" content="Confira todos os emblemas hospedados no Ruby Hotel." />

                <meta property="og:type" content="fan-site" />
                <meta property="og:url" content="https://ruby-central.vercel.app/emblemas" />
                <meta property="og:image" content="/facebook-emblemas.png" />
                <meta property="og:site_name" content="Ruby Center" />

                {/* twitter card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:image" content="/twitter-emblemas.png" />
            </Head>
            <MainContainer>
                <BadgesHeader>
                    <h1>Scanner de emblemas</h1>

                    <Form onSubmit={handleFormSubmit}>
                        <StyledLabel css={{"$$width": "320px"}}>
                            <Binoculars size={24} weight="light" />
                            <input ref={inputRef} type="text" name="query" id="query" placeholder="Pesquise um c??digo, nome ou descri????o!"/>
                        </StyledLabel>
                        <StyledButton
                            aria-label="Realizar busca de emblemas com as informa????es fornecidas."
                            type="submit"
                            focusRipple
                            disabled={isSearching}
                        >
                            Buscar
                        </StyledButton>
                    </Form>
                </BadgesHeader>

                <ResultWrapper>
                    <h2>Resultado da busca</h2>
                    <BadgesContainer>
                        {
                            badges.length !== 0 ?
                            badges.map(badge => {
                                return (
                                    <Tooltip
                                        content={ <>
                                            <BadgeParagraph><strong>T??tulo:</strong> {badge.title}</BadgeParagraph>
                                            <BadgeParagraph><strong>Descri????o:</strong> {badge.description}</BadgeParagraph>
                                            <BadgeParagraph><strong>C??digo:</strong> {badge.code}</BadgeParagraph>

                                            <BadgeLink href={`/emblemas/${badge.code}`}>Clique para ver quem tem o emblema</BadgeLink>
                                        </> }
                                        key={badge.code + badge.title}
                                        asChild={true}
                                    >
                                        <BadgeToolTipTrigger type="button" aria-label="ver mais informa????es sobre o emblema">
                                            <Badge src={`https://rubyhotel.city/apifiles/badges/${badge.code}`} alt="" width={40} height={40} unoptimized={true} />
                                        </BadgeToolTipTrigger>
                                    </Tooltip>
                                )
                            }) :
                            <NothingFoundWarning>Nada foi encontrado</NothingFoundWarning>
                        }
                    </BadgesContainer>

                </ResultWrapper>

                <BadgesFooter>
                    <p>Vistos {badgesAmountFromTotal} de {total} resultados.</p>

                    <PaginationContainer>
                        <PaginationArrows
                            onClick={paginationControls.prev}
                            aria-label="ir para a p??gina anterior"
                            disabled={currentPage <= 1 || isChangingPage}
                            focusRipple
                        >
                            <CaretLeft size={16} weight="bold" />
                        </PaginationArrows>

                        <PaginationLinkWrapper>

                            {/* link para primeira p??gina */}
                            {isFirstPageVisible === false && <>
                                <PaginationLink href={`${changePagePath}1`}>1</PaginationLink>
                                <PaginationDivisor>...</PaginationDivisor>
                            </>}

                            {/* 5 links de navega????o */}

                            {calculatedPages.map((page: number) => {
                                if(page === currentPage) {
                                    return <PaginationLink key={page} className="active" as="span">{page}</PaginationLink>
                                }
                                
                                return <PaginationLink key={page} href={`${changePagePath}${page}`}>{page}</PaginationLink>
                            })}

                            {/* link para a ??ltima p??gina */}
                            {isLastPageVisible === false && <>
                                <PaginationDivisor>...</PaginationDivisor>
                                <PaginationLink href={`${changePagePath}${totalPages}`}>{totalPages}</PaginationLink>
                            </>}

                        </PaginationLinkWrapper>

                        <PaginationArrows
                            onClick={paginationControls.next}
                            aria-label="ir para a pr??xima p??gina"
                            disabled={currentPage === totalPages || isChangingPage}
                            focusRipple
                        >
                            <CaretRight size={16} weight="bold" />
                        </PaginationArrows>
                    </PaginationContainer>
                </BadgesFooter>
            </MainContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps<any, {query?: string;}> = async ({query}) => {
    const options = {
        method: "GET",
        headers: {
            "authorization": "Bearer " + process.env.API_BEARER_TOKEN
        }
    }
    const usableQuery = !!query.query ? query.query : ""
    const page = !!query.page ? query.page : 0

    const request = !query.page && !query.query ? await fetch("https://api.rubyhotel.city/api/badges?paginationLimit=30", options) : await fetch(`https://api.rubyhotel.city/api/badges?paginationLimite=30&search=${usableQuery}&page=${page}`, options)

    const response = await request.json()   

    const statusData = await response.response

    if (response.success === true) {
        const badgesData = await statusData.data

        return {
            props: {
                badges: badgesData,
                total: statusData.total,
                currentPage: statusData.current_page,
                totalPages: statusData.last_page,
            },
        }
    }

    return {
        props: {},
    }
}

