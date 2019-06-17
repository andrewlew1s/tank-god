import React from 'react';
import HeaderContent from './HeaderContent'
import './Header.css';

const Header = () => {
	return (
		<header className="Header-wrap">
			<div className="Header-img" />
				<div className="Header-content">
					<HeaderContent />
				</div>
      </header>
	)
}

export default Header;