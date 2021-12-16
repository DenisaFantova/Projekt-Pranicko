import React from 'react';

import Menu from './Menu';
import Header from './Header';
import Configurator from './Configurator';

const CardCreate = () => {
	   return (
		   <>
		   <Menu />
		   	<Header title={"Vytvořit přáníčko"}/>
			<main className="content">

				<div className="box">
					<div className="box__inside">
						<Configurator />
					</div>
				</div>

			</main>
		</>	
    )
}

export default CardCreate
