import React from 'react'

import {configuration} from '../configuration'


const OptionsColor = ({handleColor}) => {

    const handleChange = (e) => {
        handleColor(e.target.value)
    }

    return (
        <>
            {
                configuration.colors.map(color => 
                    <div key={color.value} className="field__swatch">
                        
                        <input
                            onChange={handleChange}
                            type="radio"
                            name="color"
                            id={`color-${color.value}`}
                            value={color.value}
                        />

                        <label
                            htmlFor={`color-${color.value}`}
                            className={`swatch--${color.value}`}
                            data-description={color.description}>
                        </label>
                        
                    </div>)
            }
        </>
    )
}

export default OptionsColor
