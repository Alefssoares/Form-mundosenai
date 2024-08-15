import * as C from "@chakra-ui/react";
import { useState } from "react";

const FormProjeto = () => {
    // Gerencia o estado dos checkboxes
    const [selectedAreas, setSelectedAreas] = useState([]);

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setSelectedAreas((prevSelectedAreas) =>
            prevSelectedAreas.includes(value)
                ? prevSelectedAreas.filter((area) => area !== value)
                : [...prevSelectedAreas, value]
        );
    };

    return (
        <C.VStack spacing={4} align="flex-start">
            <h1>Cadastro</h1>
            <C.Input type="text" placeholder="Digite o Nome do Projeto" />
            <C.FormControl>
                <C.FormLabel>Áreas</C.FormLabel>
                <C.Stack spacing={2}>
                    <C.Checkbox
                        value="CETCC"
                        isChecked={selectedAreas.includes("CETCC")}
                        onChange={handleCheckboxChange}
                    >
                        CETCC
                    </C.Checkbox>
                    <C.Checkbox
                        value="CETAFAJU"
                        isChecked={selectedAreas.includes("CETAFAJU")}
                        onChange={handleCheckboxChange}
                    >
                        CETAFAJU
                    </C.Checkbox>
                    <C.Checkbox
                        value="CETICC"
                        isChecked={selectedAreas.includes("CETICC")}
                        onChange={handleCheckboxChange}
                    >
                        CETICC
                    </C.Checkbox>
                    <C.Checkbox
                        value="CETAFEST"
                        isChecked={selectedAreas.includes("CETAFEST")}
                        onChange={handleCheckboxChange}
                    >
                        CETAFEST
                    </C.Checkbox>
                </C.Stack>
            </C.FormControl>
            <C.Input type="email" placeholder="Digite seu Coordenador" />
        </C.VStack>
    );
};

export default FormProjeto;
