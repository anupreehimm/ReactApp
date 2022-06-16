import { useEffect, useState } from "react"
import { executeCreating, executeReading, executeUpdate } from "./Storage"

export const Update=(anu)=>{

    const[one,setOne]=useState({})
    useEffect(()=>{
        setOne(executeReading(anu.part))

    },[])

    const onTrack=(silviya)=>{
        const{name,value}=silviya.target
        setOne((remain)=>{
            return{
                ...remain,
                [name]:value
            }

        })

    }
    const change=()=>{
        executeUpdate(one)
        alert(one.id+" has updated")
    }

    return(
        <>
                <h1>Update Components</h1>
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 shadow p-4">
                        <input type="text" onChange={onTrack} value={one.id} readOnly="true" name="id" className="form-control" placeholder="ID"/>
                        <input type="text" onChange={onTrack} value={one.name} name="name" className="form-control" placeholder="name"/>
                        <input type="text" onChange={onTrack} value={one.issues} name="issues" className="form-control" placeholder="issue"/>
                        <div className="row justify-content-around mt-2">
                            <button className="btn btn-outline-primary col-1" onClick={change}>
                                <i class="bi bi-file-person-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}