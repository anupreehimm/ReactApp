let records=[
    {
        "id":2001,
        "name":"Anu",
        "issues":"night Shift"

    },
    {
        "id":1236,
        "name":"Silviya",
        "issues":"No"

    },
    {
        "id":2001,
        "name":"Praba",
        "issues":"No"

    }
]
const affect=()=>
{
    localStorage.setItem("warehouse",JSON.stringify(records))
}
 const loading=()=>
{
    const tmp=localStorage.getItem("warehouse")
    records=JSON.parse(tmp)
}
export const executeListing=()=>{
    //loading()
    return records
}
export const executeCreating=(obj)=>{
    loading()
    records.push(obj)
    affect()
}

export const executeReading=(key)=>{
    loading()
    alert("Received "+key)
    for(var ind=0;ind<records.length;ind++)
    {
        if(records[ind].id===key)
        {
            return records[ind]
        }
        
    }
    return {}
}

export const executeUpdate=(obj)=>{
    loading()
    for(var ind=0;ind<records.length;ind++)
    {
        if(records[ind].id===obj.id){
            records[ind]=obj
            affect()
           return;
        }
        
    }
    alert("Invalid Id")

}
export const executeDeleting=(uni)=>{
    loading()
    records=records.filter((ele,ind)=>{
        return ele.id!==uni
               
    })
    affect()
    alert(uni+"has been deleting")

}
