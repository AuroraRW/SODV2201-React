import {useState, useEffect} from 'react'
function Theme(){
    const [theme, setTheme] = useState(()=>{
        const savedTheme = localStorage.getItem('theme')
        return savedTheme !== null? savedTheme : 'light'
    })
    const handleTheme = ()=>{
        setTheme(theme==='light'? 'dark':'light')
    }
    useEffect(()=>{
        localStorage.setItem('theme', theme)
        document.body.className = theme
    }, [theme])

    return(
        <div>
            <h1>Theme: {theme}</h1>
            <button onClick={handleTheme}>Theme</button>
        </div>
    )
}
export default Theme