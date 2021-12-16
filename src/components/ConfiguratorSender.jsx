import React from 'react'

const ConfiguratorSender = ({handleSender}) => {

    const handleChange = (e) =>  {
        handleSender(e.target.value)
    } 

    return (
        <div className="field">
            <label
                className="field__label"
                htmlFor="sender">
                Odesílatel (podpis)
            </label>
            <input
                onChange={handleChange}
                className="field__input"
                type="text"
                name="sender"
                id="sender"
                rows="3"
                maxLength="30"
                autoComplete="off"
            />
        </div>
    )
}

export default ConfiguratorSender
