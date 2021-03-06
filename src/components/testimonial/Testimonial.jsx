import { useEffect, useState } from 'react'
import axios from 'axios'
import Title from './Title'
import Container from './Container'
import Content from './Content'
import ContainerButtons from './ContainerButtons'

const Testimonial = () =>{
    
    const [data, setData] = useState()
    const [review, setReview] = useState(0)

    useEffect(()=>{
        async function getData(){
            const res = axios.get(`https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json`)
            res.then(r => {
                console.log(r.data)
                setData(r.data.slider)
            })
        }
        getData()
    },[])

    const handlePrev = () =>{
        if (review - 1 < 0) {
            return;
        }
        else
            setReview(review - 1)
    }

    const handleNext = () =>{
        console.log(review + 1, data.reviews.length)
        if (review + 1 === data.reviews.length) {
            return;
        }
        else
            setReview(review + 1)
    }
    
    return(
        <Container>
            {data?<Title>{data.title}</Title> : <div>loading</div>}
            <Content 
                data={data} 
                review={review}
            />
            <ContainerButtons 
                data={data} 
                review={review} 
                handlePrev={handlePrev} 
                handleNext={handleNext} 
            />
        </Container>
    )
}

export default Testimonial