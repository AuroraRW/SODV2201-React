import {forwardRef} from 'react'
import { createPortal } from 'react-dom'
const ResultModal = forwardRef(function ResultModal({targetTime}, ref){
    return createPortal(
        <dialog ref={ref}>
            <h2>You Lost!</h2>
            <p>The target time was {targetTime} seconds </p>
            <form method='dialog'>
                <button>Close</button>
            </form>
        </dialog>, 
        document.getElementById('modal')
    )
})

export{ResultModal}