import React from 'react';
import { useParams, Link } from 'react-router-dom';


import Header from './Header';

const CardReady = () => {

	const {id} = useParams();

    return (
	<>	
		<Header title={"Přáníčko je připravené"}/>
        <main className="content">

			<div className="pickup">

				<p className="pickup__label">Přímý odkaz na přáníčko</p>

				<div className="box shadow mb-30">
					<div className="box__inside pt-0 pb-0">
						<a href={`${window.location.protocol}//${window.location.hostname}${window.location.port && ':' + window.location.port}/card/${id}`} className="pickup__url">{`${window.location.protocol}//${window.location.hostname}${window.location.port && ':' + window.location.port}/card/${id}`}</a>
						<p className="pickup__description">
							Tento odkaz pošli emailem, přes messenger nebo ho dej na sociální sítě. Po kliknutí na odkaz se zobrazí tvoje přáníčko.
						</p>
					</div>
				</div>


				<p className="pickup__label">Kód tvého přáníčka</p>

				<div className="box shadow mb-30">
					<div className="box__inside pt-0 pb-0">
						<div className="pickup__code">{id}</div>
						<p className="pickup__description">
							S tímto kódem si kdokoliv může vyzvednout tvoje uložené přáníčko. Hodí se, když chceš přáníčko poslat třeba SMSkou a nechceš opisovat celou adresu.
						</p>
					</div>
				</div>
				<Link to="/vytvorit-pranicko">
				<button className="button button--gold button--big">Vytvořit další přáníčko</button>
				</Link>
			</div>

		</main>
	</>
    )
}

export default CardReady
