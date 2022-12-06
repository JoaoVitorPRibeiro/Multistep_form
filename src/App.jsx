// Components
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";

import { useForm } from "./hooks/useForm";
import { useState } from "react";

import "./App.css";
import Steps from "./components/Steps";

const formTemplate = { // Criando um JSON sem nada, com apenas a formatação, para ser prenchido pelo usuário
  name: "",
  email: "",
  review: "",
  comment: "",
}

function App () {
const [data, setData] = useState(formTemplate) //O formulário vazio, ao ser prenchido, vai ficar na variavel data

const updateFieldHandle = (key, value) => {
  setData((prev) => {
    return {...prev, [key]: value}
  })
}

  const formComponents = [
  <UserForm data={data} updateFieldHandle={updateFieldHandle}/>, 
  <ReviewForm data={data} updateFieldHandle={updateFieldHandle}/>, 
  <Thanks data={data}/>
];

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm (formComponents)

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe suas avaliação!</h2>
        <p>
          Ficamos felizes com a sua aquisição! Ajude outras pessoas e nos diga o que achou do produto!
        </p>
        <div className="form-container">
          <Steps currentStep={currentStep} />
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}> 
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              {!isFirstStep && (<button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious/>
                <span>Voltar</span>
              </button>)}
              {!isLastStep ? (
               <button type="submit">
               <span>Avançar</span>
               <GrFormNext />
               </button>
              ) : (
                <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
  
  export default App