import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    // Custom Hook - desestructuramos un objeto {} y le mandamos images, isLoading para acortar el código
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                // Isloading está en true va a ejecutar el H2
                isLoading && (<h2>Cargando...</h2>)
            }


            <div className="card-grid">
                {
                    // si no tenemos imagenes esto se esta mostrando siempre el div card pero su contenido se crea cuando hayan imagenes
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            // {} se puede utilizar para esparcir las propiedades, en este caso de image en GifItem
                            {...image}

                        />
                    ))
                }

            </div>
        </>
    )
}
