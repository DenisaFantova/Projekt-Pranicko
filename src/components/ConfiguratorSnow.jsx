import React from 'react'

import OptionsSnow from './OptionsSnow'

const ConfiguratorSnow = ({handleChooseSnow}) => {
    
    const handleSnow = (value) => {
        handleChooseSnow(value)
    } 
    
    return (
        <div className="field">
            <label className="field__label ">Sníh na pozadí</label>

            <div className="field__radio-group">
                <OptionsSnow handleSnow={handleSnow} />
            </div>
        </div>
    )
}

export default ConfiguratorSnow
