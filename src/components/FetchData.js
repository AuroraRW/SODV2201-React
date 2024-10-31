import {useState, useEffect} from 'react'
function FetchData(){
    const [user, setUser] = useState('')
    const [userId, setUserId] = useState('')
    async function fetchUser(){
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const data = await response.json()
        console.log(data)
        setUser(data)
    }
    useEffect(()=>{
        if(userId){
            fetchUser()
        }
    }, [userId])
    
    return(
        <div>
            <input type="number" onChange={(e)=>{setUserId(e.target.value)}}/>
            <p> {userId? user.name:'Please select!'}</p>
        </div>
    )
}
export default FetchData