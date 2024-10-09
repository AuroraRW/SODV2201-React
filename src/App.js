import './App.css';
import {Player} from './components/Player.js'
import { TimerChallenge } from './components/TimerChallenge.js';
function App() {
  return (
    <>
      <Player />
      <div style={{display:'flex',justifyContent:'center'}}>
        <TimerChallenge title="Easy" targetTime = {1}/>
        <TimerChallenge title="Not easy" targetTime = {5}/>
        <TimerChallenge title="Getting tough" targetTime = {10}/>
        <TimerChallenge title="Pros only" targetTime = {15}/>
      </div>
    </>
  );
}

export default App;
