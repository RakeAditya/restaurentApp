import React from 'react';
import { images } from '../../static';
import './Mainhead.css';
import { Subheading } from '../../components';
const Mainhead = () => {
	return (
		<div className="app_mainhead app__wrapper section__padding" id="home_sec">
			<div className="app__wrapper_info">
				<Subheading title="chase the new flavour" />
				<h1 className="app_mainhead_h1">The Key to fine dining</h1>
				<p className="p_links app_mainhead_p">
					Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
					tellus{' '}
				</p>
				<button className="custom__button">Explore Menu</button>
			</div>
			<div className="app__wrapper_img">
				<img src={images.welcome} alt="welcome h yaha" />
			</div>
		</div>
	);
};

export default Mainhead;
