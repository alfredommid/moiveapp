import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const Show = () => {
    const [show, setShow] = useState({});
    const {idShow} = useParams();

    const peticion = async () => {
        const byShowUrl = `http://api.tvmaze.com/shows/${idShow}` 
        const {data} = await axios.get(byShowUrl)
        setShow(data);
    }

    useEffect(() => {
        peticion();
    }, []);

    return (
        <div className="container mt-4">
            <h1>Show</h1>
            {
                show.name
                ? <h2>{show.name}</h2>
                : <h2>Cargando...</h2>
            }
        </div>
    )
}

export default Show