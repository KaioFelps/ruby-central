import Image from "next/image";
import { InfosCol, SeeMoreAnchor, SummariesContainer, SummaryCard, SummaryRow } from "../styles/components/summary";

import caixa from "../assets/caixa.png"
import anonimo from "../assets/anonimo.png"
import emblema from "../assets/emblema.png"
import { ArrowSquareOut } from "phosphor-react";

export function Summary() {
    return (
        <SummariesContainer>
            <SummaryCard>
                <SummaryRow>
                    <Image src={caixa} alt="" unoptimized={true} />
                    <InfosCol>
                        <p>Móveis hospedados</p>
                        <h3>1253</h3>
                    </InfosCol>
                </SummaryRow>
                <SeeMoreAnchor href="/mobis">
                    Ver mais <ArrowSquareOut size={16} weight="bold" />
                </SeeMoreAnchor>
            </SummaryCard>
            
            <SummaryCard>
                <SummaryRow>
                    <Image src={anonimo} alt="" unoptimized={true} />
                    <InfosCol>
                        <p>Usuários online</p>
                        <h3>1253</h3>
                    </InfosCol>
                </SummaryRow>
                <SeeMoreAnchor href="/users">
                    Ver mais <ArrowSquareOut size={16} weight="bold" />
                </SeeMoreAnchor>
            </SummaryCard>
            <SummaryCard>
                <SummaryRow>
                    <Image src={emblema} alt="" unoptimized={true} />
                    <InfosCol>
                        <p>Emblemas hospedados</p>
                        <h3>1253</h3>
                    </InfosCol>
                </SummaryRow>
                <SeeMoreAnchor href="/emblemas">
                    Ver mais <ArrowSquareOut size={16} weight="bold" />
                </SeeMoreAnchor>
            </SummaryCard>
        </SummariesContainer>
    )
}