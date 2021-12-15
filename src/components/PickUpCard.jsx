import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Menu from './Menu';
import Header from './Header';

const PickUpCard = () => {

	const [cardCode, setCardCode] = useState(null);

	const handleChange = (e) => {
		setCardCode(e.target.value)
	}

    return (
		<>	
			<Menu />
			<Header title={"Vyzvednout přáníčko"}/>
			<main className="content">

			<form className="pickup" autocomplete="off">
				<label for="pickup-code" class="pickup__label">Zadej šestimístný kód přáníčka</label>

				<div className="box shadow mb-30">
					<div className="box__inside pt-0 pb-0">

						<input onChange={handleChange} id="pickup-code" class="pickup__code" type="text" maxlength="6" autocomplete="off" />

					</div>
				</div>

				<button className="button button--gold button--big"><Link to={`/card/${cardCode}`}>Vyzvednout přáníčko</Link></button>

			</form>

		</main>
	</>
    )
}

export default PickUpCard
