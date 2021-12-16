import React from 'react'

import OptionsCover from './OptionsCover'

const ConfiguratorCover = ({handleChooseCover}) => {
    
    const handleCover = (value) => {
        handleChooseCover(value)
    }
    
    return (
        <div className="field">
            <label className="field__label">Obrázek na obálce</label>

            <div className="field__swatch-group field__swatch-group--big">

                <OptionsCover handleCover={handleCover} />

            </div>

        </div>

    )
}

export default ConfiguratorCover
