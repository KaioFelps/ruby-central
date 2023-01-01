import { Binoculars } from "phosphor-react";
import { StyledLabel } from "../../styles/global";
import { BadgesHeader, BinocularsButton, MainContainer } from "../../styles/pages/emblemas";

export default function Emblemas() {
    return (
        <MainContainer>
            <BadgesHeader>
                <h1>Scanner de emblemas</h1>

                <form action="">
                    <StyledLabel css={{"$$width": "464px"}}>
                        <Binoculars size={24} weight="light" />
                        <input type="text" name="query" id="query" placeholder="Pesquise um código, nome ou descrição!"/>
                    </StyledLabel>
                </form>
            </BadgesHeader>

        </MainContainer>
    )
}