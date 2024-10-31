import Timer from './components/Timer'
import Theme from './components/Theme'
import {useState} from 'react' 
import './App.css';
import FetchData from './components/FetchData';

function App() {
  const [showTimer, setShowTimer] = useState(true)
  const [count, setCount] = useState(0)
  return (
    // <div>
    //   <button onClick={()=>setShowTimer(!showTimer)}>{showTimer? "Hide":"Show"}</button>
    //   <button onClick={()=>{setCount(count + 1)}}>Force Re-render</button>
    //   <p>App re-render count: {count}</p>
    //   {showTimer&&<Timer />}
    // </div>

    // <Theme />

    <FetchData />
  );
}

export default App;
