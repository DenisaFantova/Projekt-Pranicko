import React from 'react'

const MusicConfigurator = () => {
    return (
        <div className="field">
            <label className="field__label">Hudba</label>

            <div className="field__radio-group">
                <div className="field__radio">
                    <input type="radio" name="music" id="music-jingle-bells" checked />
                    <label for="music-jingle-bells">Rolničky, roličky</label>
                </div>

                <div className="field__radio">
                    <input type="radio" name="music" id="music-silent-night" />
                    <label for="music-silent-night">Tichá noc</label>
                </div>


                <div className="field__radio">
                    <input type="radio" name="music" id="music-god-rest" />
                    <label for="music-god-rest">Pokoj Vám</label>
                </div>
            </div>
        </div>
    )
}

export default MusicConfigurator
