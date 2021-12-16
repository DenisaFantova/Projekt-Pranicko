import React from 'react'

import OptionsMusic from './OptionsMusic'

const ConfiguratorMusic = ({handleChooseMusic}) => {
    
    const handleMusic = (value) => {
        handleChooseMusic(value)
    }
    
    return (
        <div className="field">
            <label className="field__label">Hudba</label>

            <div className="field__radio-group">
                <OptionsMusic handleMusic={handleMusic} />
            </div>
        </div>
    )
}

export default ConfiguratorMusic
