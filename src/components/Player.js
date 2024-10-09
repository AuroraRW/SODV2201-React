import {useState, useRef} from 'react'
function Player(){
    const playerName = useRef()
    const [enteredName, setEnteredName]= useState(null)
    
    function handleClick(){
        setEnteredName(playerName.current.value)
        playerName.current.value = ''
    }
    return (
        <section style={{textAlign:'center'}}>
            <h2>Welcome {enteredName?enteredName:'unknown'}</h2>
            {/* <h2>Welcome {playerName.current.value? playerName.current.value: 'unknown'}</h2> */}
            {/* <h2>Welcome {playerName.current? playerName.current.value: 'unknown'}</h2> */}
            <input ref={playerName} type="text"/>
            <button onClick={handleClick}>Set Name</button>
        </section>
    )
}
export {Player}