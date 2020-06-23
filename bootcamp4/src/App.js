import React, {useState} from 'react';
import Message from './Message';
import './App.css';

export default function App(){

let [count, setCount] = useState(0)
let [isMorning, setMorinig] = useState(true)

return(
<div className={`box ${isMorning ? 'dayLight' : ''}`}>
<Message counter={count}/>
<h1>Good = {isMorning ? 'Morning' : 'Night'}</h1>
<br/>
<button onClick={()=> setCount(++count)}> CountDown</button>

<button onClick={()=>setMorinig(!isMorning)}> Update MOrning</button>
</div>
);

}