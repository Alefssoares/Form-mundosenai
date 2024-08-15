import * as C from "@chakra-ui/react"
import { useState } from "react"
import Step from "./Components/Step"
import FormProjeto from "./Pages/FormProjeto"
import FormPessoal from "./Pages/FormPessoal"
import FormEndereco from "./Pages/FromEndereco"




function App() {
const [step, setstep]= useState(1)
const Steps = [1,2,3]

const getStep = () =>{
  switch(step){
    case 1:
      return <FormPessoal/>
      case 2:
        return <FormEndereco/>
        case 3:
          return <FormProjeto/>
          default:
            return <FormPessoal/>
            
  }
}
  return (
   <C.Flex h="100vh" align="center" justify="center">
    <C.Center  maxW={500} w="100%" py={10} px={4} flexDirection="column" borderColor={"purple"} border="2px" >
      <C.HStack spacing={4}>
      
      {Steps.map((item) =>(
      <Step key={item} index = {item} active={step===item}/>
      ))}

      </C.HStack>

      <C.Divider my={4} borderColor="Black.400"></C.Divider>

      <C.Box w="80%">{getStep()}</C.Box> 
      
        <C.HStack mt={4} spacing={10}>
          <C.Button bg="gray.200" onClick={() => step!==1 && setstep(step-1)}
           disable={step === 1}> Voltar
            </C.Button> 
           
         
          <C.Button bg="green" onClick={() => step!==3 && setstep(step+1)}
           > {step === 3 ? "Enviar":"Proximo"} 
             
          </C.Button> 
        </C.HStack>
    </C.Center>
   </C.Flex>
  
  )
}

export default App
