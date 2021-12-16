import React from 'react'

import {configuration} from '../configuration'


const OptionsMusic = ({handleMusic}) => {

    const handleChange = (e) => {
        handleMusic(e.target.value)
    }

    return (
        <>
            {
                configuration.music.map(music => 
                    <div key={music.value} className="field__radio">

                        <input
                            onChange={handleChange}
                            type="radio"
                            name="music"
                            id={`music-${music.value}`}
                            value={music.value}
                        />

                        <label
                            htmlFor={`music-${music.value}`}>
                            {music.description}
                            
                        </label>
                    </div>)
            }
        </>
    )
}

export default OptionsMusic
