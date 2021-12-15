import React from 'react'

const SnowConfigurator = () => {
    return (
        <div className="field">
            <label className="field__label ">Sníh na pozadí</label>

            <div className="field__radio-group">
                <div className="field__radio">
                    <input type="radio" name="snow" id="snow-0" checked />
                    <label for="snow-0">bez sněhu</label>
                </div>

                <div className="field__radio">
                    <input type="radio" name="snow" id="snow-1" />
                    <label for="snow-1">málo</label>
                </div>


                <div className="field__radio">
                    <input type="radio" name="snow" id="snow-2" />
                    <label for="snow-2">hodně</label>
                </div>
            </div>
        </div>
    )
}

export default SnowConfigurator
