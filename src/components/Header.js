import { useContext } from "react"
import { ThemeContext } from "./ThemeContextProvider"

export default function Header(){
    const {toggleTheme} = useContext(ThemeContext)
    return(
        <header>
            <h1>Demo Website</h1>
            <button onClick={toggleTheme}>Theme</button>
        </header>
    )
}