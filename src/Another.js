import { useEffect, useState } from "react"
import { records } from "./API"

export const Another=()=>{

    const[myRecords,SetmyRecords]=useState([])  

    useEffect(()=>{
        SetmyRecords(records)
    },[])

    return(<>    
            <table className="table table-bordered col-lg-8 col-md-10 col-sm-12 shadow">
                <thead>
                    <tr>
<<<<<<< HEAD
                        <th>Resource id</th> 
=======
                        <th>Resource id</th>
>>>>>>> 37900ea3c5e40747fa923dd8c47c186414c3320c
                        <th>Resource name</th>
                        <th>Resource issues</th>
                    </tr>
                </thead>
                <tbody>
                    {myRecords.map((ele,ind)=>(
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