import {useState} from 'react'
import './App.css';
import Page from './components/Page'
import { ThemeContextProvider } from './components/ThemeContextProvider';
function App() {
  // const [theme, setTheme] = useState('light')
  // const toggleTheme=()=>{
  //   if(theme==='light'){
  //     setTheme('dark')
  //   }else{
  //     setTheme('light')
  //   }
  // }
  return (
    // <Page theme={theme} toggleTheme={toggleTheme}/>
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  );
}

export default App;
