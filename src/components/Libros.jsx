import {useState, useEffect} from "react";
import librosData from "../data/libros.json"
import LibroCard from "../components/LibroCard";

function Libros(){

    const [libros, setLibros]= useState([])
    useEffect(()=>{
        setLibros(librosData)
    }, [])
    return(
        <>
        <section className="container">
            <h2 className="text-center">Libros destacados</h2>
            <h3 className="text-center">{`Cantidad = ${libros.length}`}</h3>
            <div className="row d-flex justify-content-center mr-4">
                { libros.map((libro, i)=>(
                    <LibroCard 
                    key={i}
                    libro={libro} />

                ))}

                {console.log(libros)}
            </div>
        </section>
        </>
    )
}

export default Libros