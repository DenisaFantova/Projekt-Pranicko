import React from 'react'

import {configuration} from '../configuration'


const OptionsColor = () => {
    return (
        <>
            {
                configuration.colors.map(color => 
                    <div key={color.value} className="field__swatch">
                    <input
                    type="radio"
                    name="color"
                    id={`color-${color.value}`} />
                    <label
                    htmlFor={`color-${color.value}`}
                    className={`swatch--${color.value}`}
                    data-description={color.description}></label>
            </div>)
            }
        </>
    )
}

export default OptionsColor
