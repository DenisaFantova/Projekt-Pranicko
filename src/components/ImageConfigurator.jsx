import React from 'react'

const ImageConfigurator = () => {
    return (
        <div className="field">
            <label class="field__label">Obrázek na obálce</label>

            <div className="field__swatch-group field__swatch-group--big">

                <div className="field__swatch">
                    <input type="radio" name="cover" id="cover-gifts" checked />
                    <label for="cover-gifts" class="swatch--cover-gifts" data-description="dárečky"></label>
                </div>

                <div className="field__swatch">
                    <input type="radio" name="cover" id="cover-decorations" />
                    <label for="cover-decorations" class="swatch--cover-decorations" data-description="ozdoby"></label>
                </div>

                <div className="field__swatch">
                    <input type="radio" name="cover" id="cover-snowflakes" />
                    <label for="cover-snowflakes" class="swatch--cover-snowflakes" data-description="vločky"></label>
                </div>

                <div className="field__swatch">
                    <input type="radio" name="cover" id="cover-trees" />
                    <label for="cover-trees" class="swatch--cover-trees" data-description="stromečky"></label>
                </div>

            </div>

        </div>

    )
}

export default ImageConfigurator
