import React from 'react'

import OptionsColor from './OptionsColor'

const ConfiguratorColor = ({handleChooseColor}) => {
    
    const handleColor = (value) => {
        handleChooseColor(value)
    }
    
    return (
        <div className="field">
            <label className="field__label">Barva přáníčka</label>

            <div className="field__swatch-group field__swatch-group--round">

               <OptionsColor handleColor={handleColor}/>

            </div>

        </div>
    )
}

export default ConfiguratorColor
