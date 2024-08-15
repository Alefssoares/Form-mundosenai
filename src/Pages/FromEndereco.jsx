import React, { useState } from 'react';
import { VStack, Select, FormControl, FormLabel } from '@chakra-ui/react';

const FormEndereco = () => {
    const [uf, setUf] = useState('');

    const handleChange = (event) => {
        setUf(event.target.value);
    };

    return (
        <VStack spacing={4} align="flex-start">
            <h1>Cadastro</h1>
             <input type="text" placeholder='digite seu cep' border ="2px"/>
             <input type="text" placeholder='digite seu bairro' border ="2px"/>
             <input type="text" placeholder='digite sua cidade'border ="2px"/>
            <FormControl>
                <FormLabel>UF</FormLabel>
                <Select 
                    placeholder="Selecione o UF" 
                    value={uf} 
                    onChange={handleChange}
                >
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </Select>
            </FormControl>
        </VStack>
    );
};

export default FormEndereco;
