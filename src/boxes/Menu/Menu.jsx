import React from 'react';
import './Menu.css';
import { images, data } from '../../static';
import { Subheading, MenuItems } from '../../components';
const Menu = () => {
	return (
		<div className="app__menu flex__center section__padding" id="menu_page">
			{/* heading */}
			<div className="app__menu__title">
				<Subheading title="menu that fits your palette" />
				<h1 className="headtext__cormorant">Todays special</h1>
			</div>
			{/* content section */}
			<div className="app__menu__main">
				{/* left section */}
				<div className="app__menu__main__left flex__center">
					<p className="app__menu__main__p">Wine & beer</p>
					<div className="app__menu__main__items">
						{data.wines.map((itm, index) => (
							<MenuItems key={itm.title + index} title={itm.title} price={itm.price} tags={itm.tags} />
						))}
					</div>
				</div>
				{/* mid section */}
				<div className="app__menu__main__mid">
					<img src={images.menu} alt="menuImage" />
				</div>

				{/* right section */}
				<div className="app__menu__main__right flex__center">
					<p className="app__menu__main__p">Cocktails</p>
					<div className="app__menu__main__items">
						{data.cocktails.map((itm, index) => (
							<MenuItems key={itm.title + index} title={itm.title} price={itm.price} tags={itm.tags} />
						))}
					</div>
				</div>
			</div>
			{/* button section */}
			<div>
				<button className="custom__button">View more</button>
			</div>
		</div>
	);
};

export default Menu;
