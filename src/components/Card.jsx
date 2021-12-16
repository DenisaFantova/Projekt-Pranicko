import React, { useState, useEffect } from 'react';
import Snowfall from 'react-snowfall'
import { useAudio } from './../hooks/useAudio';

const Card = ({card}) => {

	const [isOpen, setIsOpen] = useState(false);
	const [isPlaying, play, pause] = useAudio(`/assets/audio/${card.music}.mp3`);

	const openCard = (e) => {
		setIsOpen(!isOpen)
	}

	const handlePlayClick = () => {
		play();
	}
	
	const handlePauseClick = () => {
		pause();
	} 	
	
    return (
		<>	
			<div className={`background background--${card.background}`} >
				<button className="button button--gold" onClick={handlePlayClick}>Přehraj hudbu</button>
				<button className="button button--gold" onClick={handlePauseClick}>Zastav hudbu</button>
				<br/>

				<p className="instructions">{isOpen ? "Kliknutím mě zavři" : "Kliknutím mě otevři"}</p>
				<br/>

				<div className="snow">
					<Snowfall snowflakeCount={card.snow} />	
				</div>
				
				<div onClick={openCard} className={isOpen ? `card card--${card.color} card--open` : `card card--${card.color}`}>
					
					<div className="cover">
						<img className="cover__image" src={`/assets/images/covers/${card.cover}.svg`} />
					</div>

					<div className="inside-left">
						<div className="inside-left__content">
							<div className="inside-left__text">{card.text}</div>
							<div className="inside-left__sender">{card.sender}</div>
						</div>
						{/* <img className="inside-left__logo" src="/assets/images/czechitas.svg" alt="Czechitas" /> */}
					</div>

					<div className="inside-right">
						<div className="photo photo1"><img src="/assets/images/photos/photo1.jpg" /></div>
						<div className="photo photo2"><img src="/assets/images/photos/photo3.jpg" /></div>
						<div className="photo photo3"><img src="/assets/images/photos/butter.jpg" /></div>
						<div className="photo photo4"><img src="/assets/images/photos/kittens.jpg" /></div>
					</div>

				</div>
				{/* <!-- konec .card --> */}

			</div>				
			 {/* <!-- konec .background --> */}
		</>
	)	
}

export default Card
