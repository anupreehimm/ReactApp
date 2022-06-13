import { useState } from "react"
import { executeCreating } from "./Storage"
export const Create=()=>{
    const [myData,setMyData]=useState({
        "id":0,
        "name":"",
        "issues":""

    })
    const onTrack=(any)=>
    {
        const{name,value}=any.target
        setMyData((remain)=>{
            return{
                ...remain,
                [name]:value
            }
            
        })
    }
    const verify=()=>{
        alert(JSON.stringify(myData))
        executeCreating(myData)
        

    }
    return(
        <>      
          
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8 shadow p-4">
                    <input type="text" onChange={onTrack} value={myData.id} name="id" className="form-control" placeholder="Id" ></input>
                    <input type="text" onChange={onTrack} value={myData.name} name="name" className="form-control" placeholder="name" ></input>
                    <input type="text" onChange={onTrack} value={myData.issues} name="issues" className="form-control" placeholder="issues" ></input>
                    <div className="row justify-content-around mt-3" >
                        <button className="btn btn-outline-primary col-1" onClick={verify}>
                        <i class="bi bi-easel3"></i>
                        </button>
                    </div>

                </div>

            </div>

        </div>
        </>

    )
}