import { useState } from "react"

export const Just=()=>
{
    const[count,setCount]=useState(0)

    const fun=()=>
    {
        setCount(count+1)
    }
    const funny=()=>
    {
        setCount(0)
    }

    return(
        <>
        <button className="btn btn-outline-success" onClick={fun} onDoubleClick={funny}>
        <i class="bi bi-arrow-move"></i> 
        <span style={{backgroundColor:'red'}}>{count}</span>
        </button>
        </>
    )

}