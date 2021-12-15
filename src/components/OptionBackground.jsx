import React from 'react'

const OptionBackground = () => {
    return (
        <div className="field__swatch">
            <input type="radio" name="background" id="background-red" checked />
            <label for="background-red" class="swatch--red" data-description="červená"></label>
        </div>
    )
}

export default OptionBackground
