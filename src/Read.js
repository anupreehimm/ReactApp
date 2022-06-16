import { useEffect, useState } from "react"
import { executeReading } from "./Storage"

export const Read=(zoom)=>{
    const[single,setSingle]=useState({})
    useEffect(()=>{
        const t=executeReading(zoom.which)
        setSingle(t)
    },[])
    return(
        <>        <div className="container">
            <div className="row justify-content mt-3">
                <div className="card text-light col-lg-6 col-md-8 col-sm-10 bg-info">
                    <h1 className="card-title text-center display-4">{single.name}</h1>
                    <div className="card-body ">
                    <p className="card-text float-start">{single.id} </p>
                    <p className="card-text float-end">{single.issues} </p>
                    </div>  

                </div>

            </div>

        </div>
        </>

    )
}