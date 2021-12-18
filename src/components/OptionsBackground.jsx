import React from 'react'

import {configuration} from '../configuration'

const OptionsBackground = ({handleBackground}) => {

    const handleChange = (e) => {
        handleBackground(e.target.value)
    }

    return (
        <>
        {
            configuration.backgrounds.map((background, index) =>
            <div key={`${index}${background.value}`} className="field__swatch">
                
                <input
                    onChange={handleChange}            
                    type="radio"
                    name="background"
                    id={`background-${background.value}`} 
                    value={background.value}
                />

                <label              
                    htmlFor={`background-${background.value}`}
                    className={`swatch--${background.value}`}
                    data-description={background.description}>
                </label>
            </div>)
        }
        </>
    )
}

export default OptionsBackground
