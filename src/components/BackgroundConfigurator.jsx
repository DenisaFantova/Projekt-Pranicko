import React from 'react'

import {configuration} from './../configuration'

const BackgroundConfigurator = () => {
    return (
        <div className="field">
            <label className="field__label">Pozadí stránky</label>

            <div className="field__swatch-group field__swatch-group--round">

                <div className="field__swatch">
                    <input type="radio" name="background" id="background-red" checked />
                    <label for="background-red" class="swatch--red" data-description="červená"></label>
                </div>

                <div className="field__swatch">
                    <input type="radio" name="background" id="background-green" />
                    <label for="background-green" class="swatch--green" data-description="zelená"></label>
                </div>

                <div className="field__swatch">
                    <input type="radio" name="background" id="background-blue" />
                    <label for="background-blue" class="swatch--blue" data-description="modrá"></label>
                </div>

                <div className="field__swatch">
                    <input type="radio" name="background" id="background-gold" />
                    <label for="background-gold" class="swatch--gold" data-description="zlatá"></label>
                </div>

                <div className="field__swatch">
                    <input type="radio" name="background" id="background-tree" />
                    <label for="background-tree" class="swatch--tree" data-description="stromeček"></label>
                </div>

                <div className="field__swatch">
                    <input type="radio" name="background" id="background-decorations" />
                    <label for="background-decorations" class="swatch--decorations" data-description="ozdoby"></label>
                </div>

                <div className="field__swatch">
                    <input type="radio" name="background" id="background-snow" />
                    <label for="background-snow" class="swatch--snow" data-description="sníh"></label>
                </div>

            </div>

        </div>
    )
}

export default BackgroundConfigurator
