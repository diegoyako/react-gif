import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {
    //UseSate se inicializa como un arreglo vacio cuando se cargar getItmages y setImages 
    //que es la funcion de useState el hook dispara la renderizacion de componente
    const [images, setImages] = useState([]);
    //Otro state que cuando cargue diga true y cuando deje de cargar se llama SetIsloading en false
    const [isLoading, setIsLoading] = useState(true);
    
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    useEffect(() => {
        getImages();
    }, []);


    return {
        images,
        isLoading
    }

}

