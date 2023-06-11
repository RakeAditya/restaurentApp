import React from 'react';
import './Menuitems.css';

const MenuItems = (props) => {
	return (
		<div className="app__menuitems">
			{/* head div */}
			<div className="app__menuitems__head">
				{/* name div */}
				<div className="app__menuitems__name">
					<p className="p__cormorant" style={{ color: '#DCCA87' }}>
						{' '}
						{props.title}
					</p>
				</div>
				{/* dash */}
				<div className="app__menuitems__dash" />
				{/* price div */}
				<div className="app__menuitems__price">
					<p className="p_links">{props.price}</p>
				</div>
			</div>
			{/* foot div */}
			<div className="app__menuitems__sub">
				<p className="p_links" style={{ color: '#AAA' }}>
					{props.tags}
				</p>
			</div>
		</div>
	);
};

export default MenuItems;
