import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';

import Card from './Card'
import Loader from './Loader';

const FetchData = () => {

	const {id} = useParams();

    const [card, setCard] = useState(null);

    useEffect(() => {  
		fetch(`https://xmas-api.itgirls.cz/cards/${id}`)
		.then(response => response.json())
		.then(data => {
			setCard(data.data)			
		})
	}, [])

    return (
        <>
            {
                card !== null || undefined ? <Card card={card} /> : <Loader />
            }
        </>
    )
}

export default FetchData
