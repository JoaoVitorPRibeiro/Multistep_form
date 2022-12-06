import { useState } from "react";

export function useForm(steps) {
    const [currentStep, setCurrentStep] = useState(0);
    
    function changeStep(i, e) { //i = indice, e = element 
        if(e) e.preventDefault()

        if(i < 0 || i >= steps.length) return

        setCurrentStep(i)
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isLastStep: currentStep + 1 === steps.length ? true : false, // Aqui eu to checando o ultimo passo. Se etapa atual + 1 for igual ao comprimento dos passos (3), é verdade, caso não, é falso 
        isFirstStep: currentStep === 0 ? true : false //Aqui eu to checando se é a primeira etapa. Para que no APP.jsx, eu faça a validação, que se NÃO (!isFirstStep) for a primeira página, acrescenta o botão de voltar
    }
}