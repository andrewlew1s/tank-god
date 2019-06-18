import React from 'react';
import './Footer.css';
import AdCorp from '../../../assets/adcorp.svg';
import EthWhite from '../../../assets/eth-white.svg';



const Footer = () => {
	return (
		<div className="footer-wrap" >
			<input className="input" placeholder="enter mobile #"/>
			<div className="img-wrap">
				<img className="svg" src={AdCorp} alt="" />
				<img className="svg" src={EthWhite} alt="" />
			</div>
		</div>
	)
}

export default Footer;