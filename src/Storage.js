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
    loading()
    return records
}
export const executeCreating=(obj)=>{
    loading()
    records.push(obj)
    affect()
}
