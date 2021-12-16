import React, { useState } from 'react'

import ConfiguratorBackground from './ConfiguratorBackground'
import ConfiguratorColor from './ConfiguratorColor'
import ConfiguratorCover from './ConfiguratorCover'
import ConfiguratorSnow from './ConfiguratorSnow'
import ConfiguratorMusic from './ConfiguratorMusic'
import ConfiguratorText from './ConfiguratorText'
import ConfiguratorSender from './ConfiguratorSender'

const Configurator = () => {

    const [cardToSend, setCardToSend] = useState({
        background: '',
        color: '',
        cover: '',
        music: '',
        snow: null,
        text: '',
        sender: '',
    })

    const [errors, setErrors] = useState(null);

    const handleChooseBackground = (value) => {
        setCardToSend({...cardToSend, background: value})
    }

    const handleChooseColor = (value) => {
        setCardToSend({...cardToSend, color: value})
    }

    const handleChooseCover = (value) => {
        setCardToSend({...cardToSend, cover: value})
    }
    
    const handleChooseSnow = (value) => {
        setCardToSend({...cardToSend, snow: value})
    }
    
    const handleChooseMusic = (value) => {
        setCardToSend({...cardToSend, music: value})
    }
    
    const handleText = (text) => {
        setCardToSend({...cardToSend, text: text})
    }
    
    const handleSender = (sender) => {
        setCardToSend({...cardToSend, sender: sender})
    }

    const handleClick = (e) => {
        e.preventDefault()
        fetch('https://xmas-api.itgirls.cz/cards', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( cardToSend )
        })
        .then(response => response.json())
        .then(data => {
        // v proměnné data má odpověď ze serveru
        // a mohu si s ní dělat, co potřebuji
        data?.data?.id &&  window.location.replace(`${window.location.protocol}//${window.location.hostname}${window.location.port && ':' + window.location.port}/pranicko-je-pripravene/${data.data.id}`)
        data.success === false && setErrors(data.errors)        
        })
    }    

    return (
        <form className="configurator">

            <ConfiguratorBackground handleChooseBackground={handleChooseBackground}/>
            <ConfiguratorColor handleChooseColor={handleChooseColor}/>
            <ConfiguratorCover handleChooseCover={handleChooseCover}/>
            <ConfiguratorSnow handleChooseSnow={handleChooseSnow} />            
            <ConfiguratorMusic handleChooseMusic={handleChooseMusic} />           
            <ConfiguratorText handleText={handleText} />            
            <ConfiguratorSender handleSender={handleSender} />


            {errors !== null && errors.map((error, index) => <p key={`${index}${error}`}>{error}</p>)}

            {/* <!-- tlačítko pro odeslání --> */}
            <button onClick={handleClick} type="submit" className="button button--gold button--big mt-30">Uložit přáníčko</button>

        </form>
    )
}

export default Configurator
