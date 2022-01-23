import styled from "styled-components"

const MyDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const HorDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const MyResult = styled.p`
    color: blue;
    font-family: Roboto;
    font-size: 72px;
    margin:0;
`
const MySpan = styled.span`
    font-weight: bold;
`
const Results = ({employee, monthly}) =>{
    return(
        <MyDiv>
            <HorDiv>
                <MyResult>${employee}</MyResult>
                <MySpan>Estimated cost of savings</MySpan>
            </HorDiv>
            <HorDiv>
                <MyResult>${monthly}</MyResult>
                <MySpan>Your estimated anual savings</MySpan>
            </HorDiv>
        </MyDiv>
    )
}

export default Results