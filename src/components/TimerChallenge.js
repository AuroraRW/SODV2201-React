import './TimerChallenge.css'
import { useState, useRef } from 'react'
import { ResultModal } from './ResultModal'

function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false)
    // const [timerExpired, setTimerExpired] = useState(false)
    const timer = useRef()
    const dialog = useRef()
    function handleStart() {
        timer.current = setTimeout(() => {
                        // setTimerExpired(true)
                        console.log(dialog.current)
                        dialog.current.showModal()
                        setTimerStarted(false)
                    }, targetTime * 1000)

        setTimerStarted(true)
    }

    function handleStop() {
        clearTimeout(timer.current)
        setTimerStarted(false)
    }
    return (
        <>
            {/* {timerExpired&&<ResultModal targetTime={targetTime}/>} */}
            <ResultModal ref={dialog} targetTime={targetTime}/>
            <section className='challenge'>
                <h2>{title}</h2>
                {/* <p>{timerExpired?'You lost!':''}</p> */}
                {/* {timerExpired && <p>You lost!</p>} */}
                {/* <p>{targetTime} {targetTime>1?'seconds':'second'}</p> */}
                <p>{targetTime} second{targetTime>1?'s':''}</p>
                <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? 'Stop' : 'Start'} Challege</button>
                <p>{timerStarted ? 'Time is running...' : 'Timer inactive'}</p>
            </section>
        </>
    )
}
export { TimerChallenge }