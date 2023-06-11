import React from 'react';
// icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';
import images from '../../static/images';
const Navbar = () => {
	const [toggle, setToggle] = React.useState(false);
	return (
		<nav className="app_bar">
			<div className="app_bar_logo">
				<img src={images.gericht} alt="app logo" />
			</div>
			<ul className="app_bar_links">
				<li className="p_links">
					<a href="/">Home</a>
				</li>
				<li className="p_links">
					<a href="/">About</a>
				</li>
				<li className="p_links">
					<a href="/">menu</a>
				</li>
				<li className="p_links">
					<a href="/">Rewards</a>
				</li>
				<li className="p_links">
					<a href="/">Contacts</a>
				</li>
			</ul>
			<div className="app_bar_login">
				<a href="/" className="p_links">
					Login/Register
				</a>
				<div />
				<a href="/" className="p_links">
					Book Table
				</a>
			</div>
			{/* small screen k lie navbar k sections jo ki logog k baad sb honge*/}
			<div className="app_bar_small">
				<GiHamburgerMenu color="#fff" size={27} onClick={() => setToggle(true)} />
				{toggle && (
					<div className="app_bar_small_overlay flex__center side-bot">
						<MdOutlineRestaurantMenu size={27} className="overlay__close" onClick={() => setToggle(false)} />
						<ul className="app_bar_small_links">
							<li className="p_links">
								<a href="/" onClick={() => setToggle(false)}>
									Home
								</a>
							</li>
							<li className="p_links">
								<a href="/" onClick={() => setToggle(false)}>
									About
								</a>
							</li>
							<li className="p_links">
								<a href="/" onClick={() => setToggle(false)}>
									menu
								</a>
							</li>
							<li className="p_links">
								<a href="/" onClick={() => setToggle(false)}>
									Rewards
								</a>
							</li>
							<li className="p_links">
								<a href="/" onClick={() => setToggle(false)}>
									Contacts
								</a>
							</li>
						</ul>
					</div>
				)}

				{/* links */}
			</div>
		</nav>
	);
};

export default Navbar;
