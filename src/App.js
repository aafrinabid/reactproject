import React,{useState} from 'react'
import "./App.css";
import Button from './components/UI/Button/Button'

function App() {
  const [showPara,setShowPara]=useState(false)
  const showParaHandler=()=>{
    setShowPara(prevState=>!prevState);
  }
  return (
    <div>
      <h2>Let's get started!</h2>
      {showPara && <p>hari may ran to his pooor home B ecause he is may ran</p>}
      <Button onClick={showParaHandler}>toggle para</Button>
    </div>
  );
}

export default App;
