import React from 'react'

import {configuration} from '../configuration'


const OptionsCover = () => {
    return (
        <>
            {
                configuration.covers.map(cover => 
                    <div key={cover.value} className="field__swatch">
                    <input
                    type="radio"
                    name="cover"
                    id={`cover-${cover.value}`} />
                    <label
                    htmlFor={`cover-${cover.value}`}
                    className={`swatch--cover-${cover.value}`}
                    data-description={cover.description}></label>
            </div>)
            }
        </>
    )
}

export default OptionsCover
