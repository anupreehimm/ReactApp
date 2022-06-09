import { useEffect, useState } from "react"
import { executeListing } from "./Storage"

export const List=()=>
{
    const[tmpArr,setTmpArr]=useState([])

    useEffect(()=>{
        //affect()
        setTmpArr(executeListing())

    },[])
    return (
        <>
        <table className="table table-center table-hover table-bordered col-lg-8 col-md-10 col-sm-12 shadow">
                <thead>
                    <tr>
                        <th>Resource id</th> 
                        <th>Resource name</th>
                        <th>Resource issues</th>
                    </tr>
                </thead>
                <tbody>
                    {tmpArr.map((ele,ind)=>(
                        <tr>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.issues}</td>
                    </tr>
                    ))}
                </tbody>

            </table> 
 
        </>
    )
}