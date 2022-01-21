import { useState } from 'react'
import Configurator from './configurator/Configurator'
import Testimonial from './testimonial/Testimonial'
import Header from './header/Header'

const Home = () =>{
    const [page, setPage] = useState("page-1")
    return(
        <div style={{backgroundColor: "#eee", height: "100vh"}}>
            <Header setPage = {setPage}/>
            {
                page === "#"
                ? <div>gato</div>
                : page === "page-1"
                    ? <Testimonial/>
                    : <Configurator/>
            }
        </div>
    )
}

export default Home