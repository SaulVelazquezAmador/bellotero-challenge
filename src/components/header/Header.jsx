import { useEffect, useState } from "react"
import axios from 'axios'
import Nav from "./Nav"
import DivButtons from "./DivButtons"
import Button from "./Button"
import Bellotero from './bellotero.svg'

const Header = ({setPage}) =>{

    const [data, setData] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const res = axios.get(`https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json`)
            res.then(r => {
                console.log(r.data)
                setData(r.data.menu.items)
            })
        }
        fetchData()
    },[])

    return(
        <Nav>
            <DivButtons>
                <img src={Bellotero} alt="b"/>
            </DivButtons>
            <DivButtons>
                {data.map((t, index)=>(
                    <Button 
                        onClick={()=>setPage(t.route)} 
                        key={index}
                    >
                        {t.text}
                    </Button>
                ))}
            </DivButtons>
        </Nav>
    )
}

export default Header