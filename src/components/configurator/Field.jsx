import { useState } from "react";
import styled from "styled-components";

const MyErrorMessage = styled.span`
    color: red;
`
const MyField = styled.div`
    display        : flex;
    flex-direction : row;
    justify-content: space-between;
    margin-bottom  :  10%;
`
const MyLabel = styled.label`
    width: 35%;
    font-weight: bold
`
const MyInput = styled.input`
    border: 1px solid #aaa;
    width: 30%;
    font-size: 36px;
    outline: none;
`
const Field = ({label, setMonthly, setEmployee, ...props}) =>{
    const [error, setError] = useState(false)
    
    const handleChange = (e) =>{
        if (isNaN(e.target.value)) {
            setError(true)
        }
        else{
            setError(false)
            if (e.target.name === "employee"){ setEmployee(e.target.value) }
            if (e.target.name === "monthly"){ setMonthly(e.target.value) }
        }
    }
    return(
        <MyField>
            {error 
            ? <MyErrorMessage>Put a number</MyErrorMessage>
            : null}
            <MyLabel>{label}</MyLabel>
            <MyInput onChange={handleChange} {...props}/>
        </MyField>
    )
}

export default Field