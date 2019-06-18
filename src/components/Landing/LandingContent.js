import React from 'react';
import './LandingContent.css';
import Footer from '../Footer/Footer';
import Tankgod from '../../assets/tankgod.jpeg';
import Warriors from '../../assets/warriors.jpeg';
import Rockstar from '../../assets/rockstar.jpeg';
import Hunnits from '../../assets/hunnits.png';


const landingContent = () => {
	return (
		<div className="content-wrapper">
			<h1 className="text">TANK GOD</h1>
			<img className="image" src={Tankgod} alt=""/>
			<img className="token" src={Warriors} alt=""/>
			<img className="token" src={Rockstar} alt=""/>
			<img className="token" src={Hunnits} alt=""/>
			<Footer />
		</div>
	)
}

export default landingContent;