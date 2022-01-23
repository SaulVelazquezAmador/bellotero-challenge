import React, { useState, useEffect} from "react"
import axios from "axios"
import Container from "./Container"
import LeftData from "./LeftData"
import Title from "./Title"
import RightData from "./RightData"
import Field from "./Field"
import Results from "./Results"

const Configurator = () =>{

    const [data, setData] = useState()
    const [monthly, setMonthly] = useState("")
    const [employee, setEmployee] = useState("")

    useEffect(()=>{
        async function getData(){
            const res = axios.get(`https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json`)
            res.then(r => {
                console.log(r.data)
                setData(r.data.calculator)
            })
        }
        getData()
    },[])

    return(
        <Container>
            <LeftData>
                {data ? <Title>{data.title}</Title> : <div>Loading</div>}
                {data ? <span>{data.description}</span> : <div>Loading</div>}
            </LeftData>
            <RightData>
                <Field 
                    label="Monthly ingredient spending" 
                    type="text" 
                    name="monthly" 
                    value={monthly} 
                    setMonthly={setMonthly}
                />
                <Field 
                    label="Full-time employees that process invoices" 
                    type="text" 
                    name="employee" 
                    value={employee}
                    setEmployee={setEmployee}
                />
                <Results employee={employee} monthly={monthly} />
            </RightData>
        </Container>
    )
}

export default Configurator