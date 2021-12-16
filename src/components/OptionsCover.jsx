import React from 'react'

import {configuration} from '../configuration'


const OptionsCover = ({handleCover}) => {

    const handleChange = (e) => {
        handleCover(e.target.value)
    }

    return (
        <>
            {
                configuration.covers.map(cover => 
                    <div key={cover.value} className="field__swatch">
                    <input
                    onChange={handleChange}
                    type="radio"
                    name="cover"
                    id={`cover-${cover.value}`}
                    value={cover.value}
                    />
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
