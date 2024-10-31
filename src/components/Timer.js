import { useEffect } from "react"
function Timer(){
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('Timer')
        }, 1000)
        return ()=>{
            clearInterval(timer)
            console.log('clear')
        }
    },[])

    return(
        <div>This is a timer</div>
    )
}
export default Timer