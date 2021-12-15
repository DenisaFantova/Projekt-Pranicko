import React from 'react'

import {configuration} from '../configuration'

const OptionsBackground = () => {
    return (
        <>
        {
            configuration.backgrounds.map(background =>
            <div key={background.value} className="field__swatch">
                <input
                type="radio"
                name={`background-${background.value}`}
                id={`background-${background.value}`} />
                <label
                htmlFor={`background-${background.value}`}
                className={`swatch--${background.value}`}
                data-description={background.description} />
            </div>)
        }
        </>
    )
}

export default OptionsBackground
