import React from 'react'

import OptionsBackground from './OptionsBackground'

const ConfiguratorBackground = ({handleChooseBackground}) => {

    const handleBackground = (value) => {
        handleChooseBackground(value)
    }

    return (
        <div className="field">
            <label className="field__label">Pozadí stránky</label>

            <div className="field__swatch-group field__swatch-group--round">

                <OptionsBackground handleBackground={handleBackground}/>

            </div>

        </div>
    )
}

export default ConfiguratorBackground
