import { Binoculars } from "phosphor-react";
import { StyledLabel } from "../../styles/global";
import { Badge, BadgesContainer, BadgesFooter, BadgesHeader, Form, MainContainer, ResultWrapper } from "../../styles/pages/emblemas";
import { Button } from "primereact/button"
import { StyledButton } from "../../styles/global";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css"
import "primereact/resources/primereact.min.css"
import { GetServerSideProps, GetStaticProps } from "next";
import { NextRequest, NextResponse } from "next/server";
import { useRouter } from "next/router";
import NavLink from "../../components/NavLink";
import { ChangeEvent, useCallback, useRef } from "react";

type BadgeType = {
    title: string;
    description: string;
    code: string;
}

type EmblemasProps = {
    badges: BadgeType[];
    total: number;
    currentPage: number;
}

type FunctionTotalBadgesType = {
    page: number;
    currentPageTotal: number;
}

export default function Emblemas({badges, currentPage, total}: EmblemasProps) {
    const { query, push } = useRouter()
    const changePagePath = !!query.query ? `/emblemas?query=${query.query}&` : "/emblemas?"
    const pageTotalBadges = badges.length
    const inputRef = useRef<HTMLInputElement>(null)
   
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
        const query = inputRef.current!.value
        query === "" ? push("") : push(`/emblemas?query=${query}`)
    }

    return (
        <MainContainer>
            <BadgesHeader>
                <h1>Scanner de emblemas</h1>

                <Form onSubmit={handleFormSubmit}>
                    <StyledLabel css={{"$$width": "320px"}}>
                        <Binoculars size={24} weight="light" />
                        <input ref={inputRef} type="text" name="query" id="query" placeholder="Pesquise um código, nome ou descrição!"/>
                    </StyledLabel>
                    <StyledButton 
                        aria-label="Realizar busca de emblemas com as informações fornecidas."
                        type="submit"
                    >
                        Buscar
                    </StyledButton>
                </Form>
            </BadgesHeader>

            <ResultWrapper>
                <h2>Resultado da busca</h2>
                <BadgesContainer>
                    {badges.map(badge => {
                        return (
                            <Badge key={badge.code + badge.title} src={`https://rubyhotel.city/apifiles/badges/${badge.code}`} alt="" width={40} height={40} unoptimized={true} />
                        )
                    })}
                </BadgesContainer>
            </ResultWrapper>

            <BadgesFooter>
                <p>Exibindo {badgesAmountFromTotal} de {total} resultados.</p>

                <NavLink href={changePagePath + "page=2"}>proxima pagina</NavLink>
            </BadgesFooter>
        </MainContainer>
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

    const request = !query.page && !query.query ? await fetch("https://api.rubyhotel.city/api/badges", options) : await fetch(`https://api.rubyhotel.city/api/badges?search=${usableQuery}&page=${page}`, options)

    const response = await request.json()   

    const statusData = await response.response
    const badgesData = await statusData.data
    return {
        props: {
            badges: badgesData,
            total: statusData.total,
            currentPage: statusData.current_page,
        },
    }
}

