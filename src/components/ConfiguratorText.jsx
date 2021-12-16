import React, { useState } from 'react'

const ConfiguratorText = ({handleText}) => {

    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value)
        handleText(e.target.value)
    }

    return (
        <div className="field">
            <label
            className="field__label"
            htmlFor="text">
            Text uvnitř přáníčka
            </label>
            <textarea
            onChange={handleChange}
            className="field__input"
            name="text"
            id="text"
            rows="3"
            maxLength="100"
            autoComplete="off">
            </textarea>
            <p className="field__description">Zbývá <strong>{100 - text.length}</strong>/100 znaků.</p>
        </div>
    )
}

export default ConfiguratorText
