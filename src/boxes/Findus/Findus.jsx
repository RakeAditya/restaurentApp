import React from 'react';
import { Subheading } from '../../components';
import { images } from '../../static';
import './Findus.css';
const Findus = () => {
	return (
		<div className="app__wrapper app__bg section__padding">
			<div className="app__wrapper__info">
				<Subheading title="Contact us" />
				<h1 className="headtext__cormorant" style={{ margin: '1rem 0' }}>
					Find us
				</h1>
				<p className="p_links">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
				<p className="p__cormorant" style={{ margin: '1rem 0', color: '#DCCAB7' }}>
					Opening Hours
				</p>
				<p className="p_links">Mon - Fri: 10:00 am - 02:00 am</p>
				<p className="p_links" style={{ margin: '1rem 0' }}>
					Sat - Sun: 10:00 am - 03:00 am
				</p>
				<button className="custom__button">Visit Us</button>
			</div>
			<div className="app__wrapper_img">
				<img src={images.findus} alt="findus" />
			</div>
		</div>
	);
};

export default Findus;
