import { useEffect, useState } from "react"
import { Create } from "./Create"
import { Read } from "./Read"
import { executeDeleting, executeListing } from "./Storage"
import { Update } from "./Update"
export const ListUp=()=>{

    const[tmpArr,setTmpArr]=useState([])

    const[cview,setCview]=useState(false)
    const[rview,setRview]=useState(false)
    const[uview,setUview]=useState(false)


    const[specific,setSpecific]=useState(0)

    useEffect(()=>{
        //affect()
        setTmpArr(executeListing())
    },[])


    return(

        <>
        
            <div className="container mt-3">

                {(cview)?
                <>
                    <Create/>
                    <button className="btn btn-outline-success" onClick={()=>{
                        setCview(false)
                        window.location.assign("/")

                    }}>
                        <i class="bi bi-chat-right-quote-fill"></i>

                    </button>
                </>
                :
                (rview)?
                    <>
                        <Read which={specific}/>
                        <button className="btn btn-outline-success" onClick={()=>{
                            setRview(false)
                            window.location.assign("/")
        
                        }}>
                            <i class="bi bi-chat-right-quote-fill"></i>
        
                        </button>

                </>
                :
                (uview)?
                <>
                    <Update part={specific}/>
                    <button className="btn btn-outline-info" onClick={()=>{
                        setUview(false)
                        window.location.assign("/")
    
                    }}>
                        <i class="bi bi-arrow-bar-up"></i>
    
                    </button>
                </>
                
                :

                    <>
                        <button className="btn btn-outline-dark" onClick={()=>{
                            setCview(true)
                        }}>
                            <i class="bi bi-chat-right-quote-fill"></i>

                        </button>
                        <div className="row justify-content-center">
                        <table className="table table-bordered text-center table-hover col-lg-8 col-md-10 col-sm-12 shadow">
                            <thead>
                                <tr>
                                    <th>Resource Id</th>
                                    <th>Resource Name</th>
                                    <th>Resource Issue</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tmpArr.map((ele,ind)=>(
                                    <tr>
                                        <td>{ele.id}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.issues}</td>
                                        <td>
                                            <button className="btn btn-outline-warning col-2" onClick={()=>{
                                                setRview(true)
                                                setSpecific(ele.id)
                                            }}>
                                                <i class="bi bi-bookmark-heart-fill"></i>
                                            </button>
                                            <button className="btn btn-outline-danger col-2" onClick={()=>{
                                                setUview(true)
                                                setSpecific(ele.id)
                                            }}>
                                               <i class="bi bi-file-richtext-fill"></i>
                                            </button>
                                            <button className="btn btn-outline-dark col-2" onClick={()=>{
                                                    executeDeleting(ele.id)
                                                    window.location.assign("/")
                                                    
                                                }}>
                                                <i class="bi bi-file-richtext-fill"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))} 
                            </tbody>
                        </table>

                        </div>
                    </> 
                }
        </div>
            
    </>
)
}