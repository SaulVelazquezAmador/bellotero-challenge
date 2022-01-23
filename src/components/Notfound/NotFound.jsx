import styled from "styled-components"
import Error from './Error.png'

const Container = styled.div`
    max-width: 40%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%
`
const Card = styled.div`
    border: 1px solid #aaa;
    padding: 5%
`
const MyImg = styled.img`
    width:100%;
`
const NotFound = () =>{
    return(
        <Container>
            <Card>
                <MyImg src={Error} alt="Error" />
            </Card>
        </Container>
    )
}
export default NotFound