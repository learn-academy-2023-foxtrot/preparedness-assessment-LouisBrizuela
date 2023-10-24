import React, { useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
    const [personName, setPersonName] = useState("") 
    const namePassed = (nameOfPerson) => { 
      setPersonName(nameOfPerson.target.value) 
  }
  const reset = () => {
    setPersonName("") 
  }

  return (
    <body><div className="entire-content">
      <h1 className="header">Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label className="label-text" for="name">Enter your name: </Label>
          <Input id="inputfield" value={personName} onChange={namePassed} />
        </div>
        <div className="buttons">
          <Button id="reset-button" onClick={reset}>Reset</Button> 
          <ModalComponent personName={personName} /> 
        </div>
      </div>
    </div>
    </body>
  )
}

export default App
