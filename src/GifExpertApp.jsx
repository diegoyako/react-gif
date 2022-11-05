import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        // si en categories ya existe la newCategory salta el return no hace nada y se sale del if
        if (categories.includes(newCategory)) return;

        // Y si ya existe salta la función de abajo
        //Hago una copia de las categorias (desestruracion) y al final agrego la que quiero
        setCategories([newCategory, ...categories]);
    }

    return (
        <>

            <h1>GifExpertApp</h1>


            <AddCategory
                // setCategories={setCategories} />
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                categories.map((category) => (
                    <GifGrid key={category}
                        category={category} />
                ))
            }


        </>
    )
}
