import React from 'react'

const ColorConfigurator = () => {
    return (
        <div className="field">
            <label class="field__label">Barva přáníčka</label>

            <div className="field__swatch-group field__swatch-group--round">

                <div className="field__swatch">
                    <input type="radio" name="color" id="color-red" checked />
                    <label for="color-red" class="swatch--red" data-description="červená"></label>
                </div>

                <div className="field__swatch">
                    <input type="radio" name="color" id="color-green" />
                    <label for="color-green" class="swatch--green" data-description="zelená"></label>
                </div>

                <div className="field__swatch">
                    <input type="radio" name="color" id="color-blue" />
                    <label for="color-blue" class="swatch--blue" data-description="modrá"></label>
                </div>

                <div className="field__swatch">
                    <input type="radio" name="color" id="color-gold" />
                    <label for="color-gold" class="swatch--gold" data-description="zlatá"></label>
                </div>

            </div>

        </div>
    )
}

export default ColorConfigurator
