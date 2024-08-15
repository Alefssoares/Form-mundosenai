import * as C from "@chakra-ui/react";
import { useState } from "react";

const FormPessoal = () => {
    const [genero, setGenero] = useState('');

    return (
        <C.VStack spacing={4} align="flex-start">
            <h1>Cadastro</h1>
            <C.Input type="text" placeholder="Digite seu nome" />
            <C.Input type="text" placeholder="Digite seu CPF" />
            <C.Input type="email" placeholder="Digite seu E-mail" />
            
            <C.FormControl>
                <C.FormLabel>Gênero</C.FormLabel>
                <C.RadioGroup value={genero} onChange={setGenero}>
                    <C.HStack spacing={4}>
                        <C.Radio value="masculino">Masculino</C.Radio>
                        <C.Radio value="feminino">Feminino</C.Radio>
                    </C.HStack>
                </C.RadioGroup>
            </C.FormControl>
        </C.VStack>
    );
};

export default FormPessoal;
