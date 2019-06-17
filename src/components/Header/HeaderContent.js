import React from 'react';
import './HeaderContent.css';
import Tankgod from '../../assets/tankgod.jpeg';


const headerContent = () => {
	return (
		<div >
			<h1 className="text">TANK GOD</h1>
			<img className="image" src={Tankgod} alt=""/>
		</div>
	)
}

export default headerContent;