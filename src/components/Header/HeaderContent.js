import React from 'react';
import './HeaderContent.css';
import Footer from '.././Footer/Footer';
import Tankgod from '../../assets/tankgod.jpeg';
import Warriors from '../../assets/warriors.jpeg';
import Rockstar from '../../assets/rockstar.jpeg';

const headerContent = () => {
	return (
		<div className="content-wrapper">
			<h1 className="text">TANK GOD</h1>
			<img className="image" src={Tankgod} alt=""/>
			<img className="image" src={Warriors} alt=""/>
			<img className="image" src={Rockstar} alt=""/>
			<Footer />
			<Footer />
			<Footer />
			<Footer />
			<Footer />
		</div>
	)
}

export default headerContent;