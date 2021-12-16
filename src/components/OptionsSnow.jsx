import React from 'react'

import {configuration} from '../configuration'


const OptionsSnow = ({handleSnow}) => {

    const handleChange = (e) => {
        handleSnow(e.target.value)
    }

    return (
        <>
            {
                configuration.snow.map(snow => 
                    <div key={snow.value} className="field__radio">
                        <input
                        onChange={handleChange}
                            type="radio"
                            name="snow"
                            id={`snow-${snow.value}`}
                            value={snow.value}
                            />
                        <label
                            htmlFor={`snow-${snow.value}`}>
                            {snow.description}
                        </label>
                    </div>)
            }
        </>
    )
}

export default OptionsSnow
