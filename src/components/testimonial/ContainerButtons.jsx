import styled from 'styled-components'

const MyDiv = styled.div`
    display        : flex;
    flex-direction : row;
    justify-content: right;
    position       : relative;
    left           : 10%;
`
const ReviewNo = styled.div`
    margin-right: 1px;
    padding: 0 3% 0 3%;
    font-family: CormorantGaramont;
    font-style: italic;
    background-color: blue;
    color           : #fff;
    width           : 50px;
    height          : 50px;
    border          : none;
    line-height: 50px;
    display: flex;
    justify-content: center;
`
const NextPrevButton = styled.button`
    font-size: 24px;
    cursor: pointer;
    background-color: blue;
    color           : #fff;
    width           : 50px;
    height          : 50px;
    border          : none;
`
const ContainerButtons = ({data, review, handlePrev, handleNext}) =>{
    return(
        <MyDiv>
            {data ? <ReviewNo>{review+1}/{data.reviews.length}</ReviewNo> : <div>review</div>}
            <NextPrevButton onClick={handlePrev}>&larr;</NextPrevButton>
            <NextPrevButton onClick={handleNext}>&rarr;</NextPrevButton>
        </MyDiv>
    )
}
export default ContainerButtons