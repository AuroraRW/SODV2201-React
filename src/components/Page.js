import Header from './Header'
import PageStyle from './Page.module.css'
import { ThemeContext } from './ThemeContextProvider'
import { useContext } from 'react'
// export default function Page({theme, toggleTheme}){
//     return(
//         <div id="app" className={theme}>
//             <Header toggleTheme={toggleTheme}/>
//             <h1 className={PageStyle.title}>React Course</h1>
//             <p>A course that teaches you React from the ground up and in great depth!</p>
//         </div>
//     )
// }

export default function Page(){
    const {theme} = useContext(ThemeContext)
    return(
        <div id="app" className={theme}>
            <Header />
            <h1 className={PageStyle.title}>React Course</h1>
            <p>A course that teaches you React from the ground up and in great depth!</p>
        </div>
    )
}
