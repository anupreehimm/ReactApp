import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils"
import { useState } from "react"

export const Ternary=()=>
{
    const[wish,setWish]=useState("nothing")
    const[result,setResult]=useState("")
    const[decore,setDecore]=useState({color:'white', backgroundcolor:'black'})
    
    const triggered=(temp)=>{
        setWish(temp.target.value)

    }
    const pressed=()=>{

        (wish==='spring')?setDecore({color:'white', backgroundcolor:'green'}):
        (wish==='Summer')?setDecore({color:'white', backgroundcolor:'red'}):
        (wish==='Winter')?setDecore({color:'white', backgroundcolor:'blue'}):
        (wish==='rinny')?setDecore({color:'white', backgroundcolor:'grey'}):
        setDecore({color:'white', backgroundcolor:'black'})
        setResult(wish)

    }
    return(
        <>
        <input type="text" name="seasons" placeholder="Tell Here Yor Fav Season" onChange={triggered}/>
        <button onClick={pressed}>All the seasons</button>
        <p style={decore}>{result}</p>
        </>
    )
}