import React from 'react'

import OptionsCover from './OptionsCover'

const CoverConfigurator = () => {
    return (
        <div className="field">
            <label class="field__label">Obrázek na obálce</label>

            <div className="field__swatch-group field__swatch-group--big">

                <OptionsCover />

            </div>

        </div>

    )
}

export default CoverConfigurator
