import React from 'react';
import './Foot.css';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../static';
import { Footer, Newsletter, Subheading } from '../../components';
const Foot = () => {
	return (
		<div className="app__foot section__padding">
			{/* background effect daalne k lie isko use kie h */}
			<Footer />
			{/* newsletter for subscription */}
			<Newsletter />
			{/* footer links section */}

			<div className="app__foot__links">
				{/* div left */}
				<div className="app__foot__contact">
					<h1 className="app__foot__head">Contact Us</h1>
					<p className="p_links">9 W 53rd St, New York, NY 10019, USA</p>
					<p className="p_links">+1 212-344-1230</p>
					<p className="p_links">+1 212-555-1230</p>
				</div>
				{/* div mid */}
				<div className="app__foot__mid">
					<img src={images.gericht} alt="imageLogo" />
					<Subheading title={`The best way to find yourself is to lose yourself in the service of others.`} />
					<div className="app__foot__icons">
						<FiFacebook />
						<FiInstagram />
						<FiTwitter />
					</div>
				</div>
				{/* div right */}
				<div className="app__foot__right">
					<h1 className="app__foot__head">Working Hours</h1>
					<p className="p_links">Monday-Friday:</p>
					<p className="p_links">08:00 am -12:00 am</p>
					<p className="p_links">Saturday-Sunday:</p>
					<p className="p_links">07:00am -11:00 pm</p>
				</div>
			</div>
			{/* copywright secton goes here */}
			<div className="app__cpy">
				<p className="p_links">2021 Gerícht. All Rights reserved.</p>
			</div>
		</div>
	);
};

export default Foot;
