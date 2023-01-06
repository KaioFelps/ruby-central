import Image from "next/image";
import { InfosCol, SeeMoreAnchor, SummariesContainer, SummaryCard, SummaryRow } from "../styles/components/summary";

import caixa from "../assets/caixa.png"
import anonimo from "../assets/anonimo.png"
import emblema from "../assets/emblema.png"
import { ArrowSquareOut } from "phosphor-react";

type SummaryProps = {
    onlineUsers: number;
    hostedFurnis: number;
    badgesAmount: number;
}

export function Summary({ badgesAmount, hostedFurnis, onlineUsers }: SummaryProps) {
    return (
        <SummariesContainer>
            <SummaryCard>
                <SummaryRow>
                    <Image src={caixa} alt="uma caixa aberta pixelada" title="Mobílias" unoptimized={true} />
                    <InfosCol>
                        <p>Móveis hospedados</p>
                        <h2>{hostedFurnis}</h2>
                    </InfosCol>
                </SummaryRow>
                <SeeMoreAnchor href="/mobis">
                    Ver mais <ArrowSquareOut size={16} weight="bold" />
                </SeeMoreAnchor>
            </SummaryCard>
            
            <SummaryCard>
                <SummaryRow>
                    <Image src={anonimo} alt="um saco de papel pixelado" title="Usuários" unoptimized={true} />
                    <InfosCol>
                        <p>Usuários online</p>
                        <h2>{onlineUsers}</h2>
                    </InfosCol>
                </SummaryRow>
                <SeeMoreAnchor href="/usuario">
                    Ver mais <ArrowSquareOut size={16} weight="bold" />
                </SeeMoreAnchor>
            </SummaryCard>
            <SummaryCard>
                <SummaryRow>
                    <Image src={emblema} alt="uma insígnia amarela e laranja" title="Emblemas" unoptimized={true} />
                    <InfosCol>
                        <p>Emblemas hospedados</p>
                        <h2>{badgesAmount}</h2>
                    </InfosCol>
                </SummaryRow>
                <SeeMoreAnchor href="/emblemas">
                    Ver mais <ArrowSquareOut size={16} weight="bold" />
                </SeeMoreAnchor>
            </SummaryCard>
        </SummariesContainer>
    )
}