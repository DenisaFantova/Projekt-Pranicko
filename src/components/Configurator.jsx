import React from 'react'

import BackgroundConfigurator from './BackgroundConfigurator'
import ColorConfigurator from './ColorConfigurator'
import ImageConfigurator from './ImageConfigurator'
import SnowConfigurator from './SnowConfigurator'
import MusicConfigurator from './MusicConfigurator'
import TextConfigurator from './TextConfigurator'
import SenderConfigurator from './SenderConfigurator'

const Configurator = () => {
    return (
        <form className="configurator">

            <BackgroundConfigurator />
            <ColorConfigurator />
            <ImageConfigurator />
            <SnowConfigurator />            
            <MusicConfigurator />           
            <TextConfigurator />            
            <SenderConfigurator />

            {/* <!-- tlačítko pro odeslání --> */}
            <button type="submit" class="button button--gold button--big mt-30">Uložit přáníčko</button>

        </form>
    )
}

export default Configurator
