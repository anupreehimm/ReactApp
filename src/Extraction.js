import { useState } from "react"
export const Extraction=()=>{

    const[user,setUser]=useState("")

    const like=()=>
    {
        alert(user+ "Thanks for entering")
    }

    const Prabha=(anu)=>{
       setUser(anu.target.value)
        // console.log(anu.target.name)
        // console.log(anu.target.value)
        // console.log(anu.target.placeholder)

    }
    return(
        <>
        <input type="text" name="user" placeholder="Enter Your Name" onChange={Prabha}/>     
        <button onClick={like}>All is Well</button>
        </>
    )

}

