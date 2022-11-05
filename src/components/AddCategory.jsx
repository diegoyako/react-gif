import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({ target }) => {

        setinputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // Si el inputValue (trim limpiar) 
        //es menor o igual que 1 puedo escribir un return para salir de la función y que no se siga ejecutando lo demás
        if (inputValue.trim().length <= 1) return;
        // setCategories(categories => [inputValue, ...categories]);
        //limpiar formulario lo inicio con un string vacio
        onNewCategory(inputValue.trim());
        setinputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
