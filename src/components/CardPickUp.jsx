import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Menu from './Menu';
import Header from './Header';

const CardPickUp = () => {

	const [cardCode, setCardCode] = useState(null);

	const handleChange = (e) => {
		setCardCode(e.target.value)
	}

    return (
		<>	
			<Menu />
			<Header title={"Vyzvednout přáníčko"}/>
			<main className="content">

				<form 
					className="pickup" autoComplete="off">
						<label
							htmlFor="pickup-code" 
							className="pickup__label">
								Zadej šestimístný kód přáníčka
						</label>

						<div className="box shadow mb-30">
							<div className="box__inside pt-0 pb-0">
								<input 
									onChange={handleChange} 
									id="pickup-code" 
									className="pickup__code" 
									type="text" 
									maxLength="6" 
									autoComplete="off"
								/>
							</div>
						</div>

					{cardCode !== null && cardCode.length === 6
					? <Link className="button button--gold button--big" to={`/card/${cardCode}`}>Vyzvednout přáníčko</Link>
					: <p>Kód je moc krátký.</p>
					}
					
				</form>

			</main>
		</>
    )
}

export default CardPickUp
