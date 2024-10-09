import './TimerChallenge.css'
import { useState, useRef } from 'react'

function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)
    const timer = useRef()
    function handleStart() {
        timer.current = setTimeout(() => {
                        setTimerExpired(true)
                    }, targetTime * 1000)

        setTimerStarted(true)
    }

    function handleStop() {
        clearTimeout(timer.current)
        setTimerStarted(false)
    }
    return (
        <section className='challenge'>
            <h2>{title}</h2>
            {/* <p>{timerExpired?'You lost!':''}</p> */}
            {timerExpired && <p>You lost!</p>}
            <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? 'Stop' : 'Start'} Challege</button>
            <p>{timerStarted ? 'Time is running...' : 'Timer inactive'}</p>
        </section>
    )
}
export { TimerChallenge }