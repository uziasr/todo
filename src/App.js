import logo from './logo.svg';
import './App.css';
import Card from './Card'
import { useState } from "react"
import { TextField, Button } from '@mui/material';

import { invoke } from '@tauri-apps/api'

function App() {

  const [cards, setCards] = useState([])
  const [cardField, setCardField] = useState('')

  invoke('greet', { name: 'World@' })
  // `invoke` returns a Promise
  .then((response) => console.log(response))


  return (
    <div className="App">
      <header className="App-header">
        <div style={{margin: 20, display: 'flex', width: "10", width: "20%", justifyContent: "space-between"}}>
          <TextField
            value={cardField}
            onChange={(e)=>setCardField(e.target.value)}
          ></TextField>
          
            <Button
            variant='contained'
            disabled={cardField==''}
            onClick={()=>{
              setCards([...cards, cardField])
              setCardField('')
            }}>Add Todo</Button>
        </div>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", width: "50%"}}>{cards.map(card=><Card card={card}/>)}</div>
      </header>
    </div>
  );
}

export default App;
