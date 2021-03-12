import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const Show = () => {
    const [show, setShow] = useState({});
    const {idShow} = useParams();

    const peticion = async () => {
        const byShowUrl = `http://api.tvmaze.com/shows/${idShow}` 
        const {data} = await axios.get(byShowUrl)
        console.log(data);
        setShow(data);
    }

    useEffect(() => {
        peticion();
    }, []);

    return (
        <div className="container mt-4">
            <h1>Selected Show:</h1>
            {
                show.name
                ?   <div className="container d-flex contenedor m-4">
                        <div className="img-container">
                            <img src={show.image.medium} alt="show-img"/>
                        </div>
                        <article className="info-side ml-4">
                            <h3>{show.name}</h3>
                            <p>{show.summary}</p>
                            <p>Status: {show.status}</p>
                        </article>
                    </div>
                :   <h2>Cargando...</h2>
            }
        </div>
    )
}

export default Show