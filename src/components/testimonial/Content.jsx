import styled from 'styled-components'

const MyDiv = styled.div`
    display         : flex;
    flex-direction  : row;
    justify-content : space-between;
    background-color: #fff;
    width           : 100%;
    padding         : 3%;
`
const Info = styled.div`
    width: 50%;
`
const Name = styled.div`
    width: 50%;
    font-size: 32px;
    font-weight: bold;
`
const Position = styled.div`
    color: grey;
`
const Comment = styled.div`
    margin-left: 10%;
    font-size: 24px;
    font-weight: bold;
    font-family: Roboto;
    width: 60%;
`
const Content = ({data, review}) =>{
    return(
        <MyDiv>
            <Info>
                {data ? <Name>{data.reviews[review].name}</Name> : <div>loading</div>}
                {data ? <Position>{data.reviews[review].position}</Position> : <div>loading</div>}
            </Info>
            {data ? <Comment>{data.reviews[review].comment}</Comment> : <div>loading</div>}
        </MyDiv>
    )
}
export default Content